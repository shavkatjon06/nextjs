import Link from "next/link"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <span className="grid size-9 place-items-center bg-emerald-700 text-sm font-bold text-white">
              W
            </span>
            <span className="text-base font-semibold tracking-tight">WorkHub</span>
          </Link>

          <nav
            aria-label="Main navigation"
            className="flex items-center gap-1 text-sm font-medium text-slate-600">
            <Link
              href="/"
              className="px-3 py-2 transition-colors hover:text-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">
              Dashboard
            </Link>
            <Link
              href="/posts"
              className="px-3 py-2 transition-colors hover:text-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">
              Posts
            </Link>
            <Link
              href="/users"
              className="px-3 py-2 transition-colors hover:text-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">
              Users
            </Link>
          </nav>
        </div>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout