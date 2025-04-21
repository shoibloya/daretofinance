import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

const API  = process.env.POSTHOG_API_HOST!
const PID  = process.env.POSTHOG_PROJECT_ID!
const HEAD = {
  Authorization: `Bearer ${process.env.POSTHOG_PERSONAL_API_KEY}`,
  'Content-Type': 'application/json',
}

export const metadata: Metadata = { title: 'Blog‑page analytics' }

type PageView  = { day: string; views: number }
type Recording = {
  id: string
  start_time: string
  recording_duration: number
  iframe: string
}

async function getPageviews(): Promise<PageView[]> {
  const body = { query: { kind: 'HogQLQuery', query: `
      SELECT toStartOfDay(timestamp) AS day, count() AS views
      FROM events
      WHERE event = '$pageview'
      GROUP BY day
      ORDER BY day DESC
      LIMIT 7
  `}}

  const res = await fetch(`${API}/api/projects/${PID}/query/`, {
    method: 'POST',
    headers: HEAD,
    body: JSON.stringify(body),
    cache: 'no-store',
  })

  if (!res.ok) throw new Error(`Page‑view query failed – ${res.status}`)
  const { results } = (await res.json()) as { results: [string, number][] }
  return results.map(([day, views]) => ({ day, views }))
}

async function enableSharing(id: string): Promise<string> {
  const res = await fetch(
    `${API}/api/projects/${PID}/session_recordings/${id}/sharing`,
    { method: 'PATCH', headers: HEAD, body: JSON.stringify({ enabled: true }) },
  )
  if (!res.ok) throw new Error(`Share‑token failed – ${res.status}`)
  const { access_token } = (await res.json()) as { access_token: string }
  return `${process.env.POSTHOG_APP_HOST}/embedded/${access_token}`
}

async function getRecordings(limit: number): Promise<Recording[]> {
  const res = await fetch(
    `${API}/api/projects/${PID}/session_recordings?limit=${limit}&offset=0&order=start_time`,
    { headers: HEAD, cache: 'no-store' },
  )
  if (!res.ok) throw new Error(`Recording list failed – ${res.status}`)
  const { results } = (await res.json()) as {
    results: { id: string; start_time: string; recording_duration: number }[]
  }
  return Promise.all(results.map(async rec => ({
    ...rec,
    iframe: await enableSharing(rec.id),
  })))
}

function clamp(n: number, min: number, max: number) {
  return Math.min(Math.max(n, min), max)
}

type Props = { searchParams?: Record<string, string> }

export default async function Analytics({ searchParams }: Props) {
  const limit = clamp(Number(searchParams?.limit) || 5, 1, 20)
  const [views, recordings] = await Promise.all([ getPageviews(), getRecordings(limit) ])
  const chartData = views.slice().reverse()
  const maxViews = Math.max(...chartData.map(d => d.views), 1)

  if (String(limit) !== searchParams?.limit && searchParams) {
    redirect(`?limit=${limit}`)
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-10">
      <section className="space-y-4">
        <h1 className="text-2xl font-bold">Daily page‑views (last 7 days)</h1>
        {chartData.length ? (
          <div className="border rounded-xl p-4">
            <svg viewBox="0 0 700 200" className="w-full h-56">
              <polyline
                fill="none"
                stroke="#3b82f6"
                strokeWidth={3}
                points={chartData.map(({ views }, i) => {
                  const x = (i / (chartData.length - 1)) * 700
                  const y = 200 - (views / maxViews) * 200
                  return `${x},${y}`
                }).join(' ')}
              />
            </svg>
            <div className="flex justify-between text-xs text-gray-600 mt-2">
              {chartData.map(({ day }) => (
                <span key={day}>{new Date(day).toLocaleDateString()}</span>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-sm text-gray-500">No page‑view data yet.</p>
        )}
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Recent session replays</h2>
          <form method="get" className="flex items-center gap-2">
            <label htmlFor="limit" className="text-sm">Show</label>
            <input id="limit" name="limit" type="number" min={1} max={20}
              defaultValue={limit} className="w-16 border rounded p-1 text-sm" />
            <span className="text-sm">replays</span>
            <button type="submit"
              className="ml-2 rounded bg-gray-200 px-3 py-1 text-sm hover:bg-gray-300">
              Update
            </button>
          </form>
        </div>

        {recordings.map(rec => (
          <div key={rec.id} className="border rounded-xl overflow-hidden shadow">
            <div className="px-4 py-2 text-sm bg-gray-50 flex justify-between">
              <span>Started {new Date(rec.start_time).toLocaleString()}</span>
              <span>{Math.round(rec.recording_duration / 1000)} s</span>
            </div>
            <iframe src={rec.iframe} allowFullScreen width="100%" height="460" />
          </div>
        ))}
      </section>
    </main>
  )
}
