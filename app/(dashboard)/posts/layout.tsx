import Link from "next/link"
import type { ReactNode } from "react"

const PostLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="border-b border-slate-200 bg-white">
        <nav
          aria-label="Breadcrumb"
          className="mx-auto flex max-w-7xl items-center gap-2 px-5 py-3 text-xs font-medium sm:px-8"
        >
          <Link
            href="/"
            className="text-slate-500 transition-colors hover:text-emerald-800"
          >
            Dashboard
          </Link>
          <span aria-hidden="true" className="text-slate-300">/</span>
          <Link
            href="/posts"
            className="text-emerald-800 transition-colors hover:text-emerald-950"
          >
            Posts
          </Link>
        </nav>
      </div>
      {children}
    </>
  )
}

export default PostLayout