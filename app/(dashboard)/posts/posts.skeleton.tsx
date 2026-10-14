const PostsSkeleton = () => (
  <main aria-busy="true" className="min-h-screen bg-slate-50 px-5 py-14 sm:px-8">
    <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }, (_, index) => (
        <div
          key={index}
          className="min-h-56 animate-pulse border border-slate-200 bg-white p-6"
        >
          <div className="mb-6 h-4 w-8 bg-slate-200" />
          <div className="mb-3 h-5 w-4/5 bg-slate-200" />
          <div className="h-4 w-full bg-slate-100" />
        </div>
      ))}
    </div>
    <span className="sr-only" role="status">Loading posts...</span>
  </main>
)

export default PostsSkeleton