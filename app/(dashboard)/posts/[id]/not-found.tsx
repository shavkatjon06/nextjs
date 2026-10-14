import Link from "next/link"

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center bg-slate-50 px-5 py-16 text-slate-950 sm:px-8">
      <section className="mx-auto w-full max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
          WorkHub / Posts
        </p>

        <div className="mt-8 grid gap-8 border-t border-slate-200 pt-8 sm:mt-12 sm:grid-cols-[minmax(0,1fr)_minmax(16rem,0.7fr)] sm:items-end sm:gap-12 sm:pt-10">
          <div>
            <p className="text-7xl font-semibold leading-none tracking-tight text-emerald-700 sm:text-8xl">
              404
            </p>
            <h1 className="mt-6 max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              This post isn&apos;t here.
            </h1>
          </div>

          <div className="max-w-sm sm:justify-self-end">
            <p className="text-base leading-7 text-slate-600">
              The post may have been removed, or the address may be incorrect.
            </p>
            <Link
              href="/posts"
              className="mt-7 inline-flex min-h-11 items-center justify-center bg-emerald-700 px-5 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
            >
              Back to all posts
            </Link>
          </div>
        </div>
        <div aria-hidden="true" className="mt-12 h-1 w-14 bg-emerald-600" />
      </section>
    </main>
  )
}

export default NotFound