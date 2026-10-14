const Loading = () => {
  return (
    <main
      aria-busy="true"
      aria-label="Loading post"
      className="min-h-screen bg-slate-50 px-5 py-12 text-slate-950 sm:px-8 sm:py-16"
    >
      <section className="mx-auto max-w-6xl">
        <div className="h-5 w-20 animate-pulse rounded-sm bg-slate-200" />

        <article className="mt-10 max-w-3xl border-t border-slate-200 pt-8 sm:mt-14 sm:pt-10">
          <div className="h-3 w-36 animate-pulse rounded-sm bg-emerald-100" />
          <div className="mt-5 space-y-3" aria-hidden="true">
            <div className="h-9 w-full max-w-2xl animate-pulse rounded-sm bg-slate-200 sm:h-12" />
            <div className="h-9 w-3/4 max-w-xl animate-pulse rounded-sm bg-slate-200 sm:h-12" />
          </div>
          <div aria-hidden="true" className="mt-8 h-1 w-14 bg-emerald-200" />
          <div className="mt-8 space-y-3" aria-hidden="true">
            <div className="h-4 w-full animate-pulse rounded-sm bg-slate-200 sm:h-5" />
            <div className="h-4 w-full animate-pulse rounded-sm bg-slate-200 sm:h-5" />
            <div className="h-4 w-5/6 animate-pulse rounded-sm bg-slate-200 sm:h-5" />
          </div>
        </article>
        <span className="sr-only" role="status">Loading post...</span>
      </section>
    </main>
  )
}

export default Loading