import { getPosts } from '@/lib/posts'
import { IPost } from '@/types/IPost'
import Link from 'next/link'
import CreatePost from './create.post'
import DeletePost from './delete.post'

const Posts = async () => {
  const data = await getPosts()

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-14 text-slate-950 sm:px-8 sm:py-20">
      <section className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-3 border-b border-slate-200 pb-7 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
              WorkHub / Posts
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Posts</h1>
          </div>
          <p className="text-sm text-slate-500">Showing {data.length} posts</p>
        </div>

        <CreatePost />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {data.map((post: IPost) => (
            <section
              key={post.id}
              className="flex min-h-56 flex-col border border-slate-200 bg-white p-6 transition-colors hover:border-emerald-600">
              <span className="mb-6 text-sm font-semibold tabular-nums text-emerald-700">
                {String(post.id).padStart(2, "0")}
              </span>
              <Link href={`/posts/${post.id}`} className="mb-3 text-lg font-semibold leading-snug capitalize">
                {post.title}
              </Link>
              <p className="text-sm leading-6 text-slate-600">{post.body}</p>
              <DeletePost postId={post.id} />
            </section>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Posts