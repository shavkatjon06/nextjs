import Link from "next/link"
import type { IdProps } from "@/types/IdProps"
import type { IPost } from "@/types/IPost"
import { getOnePost } from "@/lib/posts"

const SinglePost = async ({ params }: IdProps) => {
  const { id } = await params
  const post: IPost = await getOnePost(id)

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-12 text-slate-950 sm:px-8 sm:py-16">
      <section className="mx-auto max-w-6xl">
        <Link
          href="/posts"
          className="inline-flex text-sm font-medium text-emerald-800 underline decoration-emerald-300 underline-offset-4 transition-colors hover:text-emerald-950">
          All posts
        </Link>

        <article className="mt-10 max-w-3xl border-t border-slate-200 pt-8 sm:mt-14 sm:pt-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
            WorkHub / Post {String(post.id).padStart(2, "0")}
          </p>
          <h1 className="mt-5 text-3xl font-semibold leading-tight capitalize tracking-tight sm:text-5xl">
            {post.title}
          </h1>
          <div aria-hidden="true" className="mt-8 h-1 w-14 bg-emerald-600" />
          <p className="mt-8 text-base leading-8 text-slate-700 sm:text-lg">
            {post.body}
          </p>
        </article>
      </section>
    </main>
  )
}

export default SinglePost