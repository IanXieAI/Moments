import { auth } from '@clerk/nextjs/server'

export default async function HomePage() {
  const { userId } = await auth()

  return (
    <main>
      <section className="hero">
        <h1>Brand Logo Workspace</h1>
        <p>
          Clerk authentication is now active. This app is ready for protected features and
          Supabase-backed data next.
        </p>
      </section>

      <section className="card">
        <h2>Session Status</h2>
        {userId ? (
          <p>
            Signed in. Your Clerk user id: <strong>{userId}</strong>
          </p>
        ) : (
          <p className="muted">Signed out. Use Sign In or Sign Up in the top-right corner.</p>
        )}
      </section>

      <section className="card">
        <h2>Current Project Files</h2>
        <p className="muted">
          analyze_logos.py, crop_logos_tight.py, crop_logos_v2.py, SUPABASE_SETUP.md
        </p>
      </section>
    </main>
  )
}
