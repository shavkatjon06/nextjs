"use client"

import { useActionState } from "react"
import { createPost } from "./actions"
import { CreatePostState } from "@/types/IPost"

const initialState: CreatePostState = {}

const CreatePost = () => {
    const [state, formAction, pending] = useActionState(createPost, initialState)
    return (
        <section aria-labelledby="create-post-title" className="mb-10 grid overflow-hidden border border-slate-200 bg-white lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col justify-between bg-emerald-950 p-7 text-white sm:p-9">
                <div>
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
                        Share an update
                    </p>
                    <h2 id="create-post-title" className="max-w-sm text-3xl font-semibold leading-tight">
                        Put your thoughts into words.
                    </h2>
                    <p className="mt-4 max-w-sm text-sm leading-6 text-emerald-100/75">
                        Add a new post to the WorkHub feed.
                    </p>
                </div>
                <p className="mt-10 border-t border-white/15 pt-4 text-xs font-medium uppercase tracking-[0.14em] text-emerald-200/70">
                    WorkHub <span className="px-2 text-emerald-500">/</span> New post
                </p>
            </div>

            <form action={formAction} className="flex flex-col gap-5 p-6 sm:p-9">
                <div>
                    <label htmlFor="post-title" className="mb-2 block text-sm font-semibold text-slate-800">
                        Title
                    </label>
                    <input
                        id="title"
                        name="title"
                        placeholder="Give your post a title"
                        className="w-full border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15 placeholder:text-slate-400"
                    />
                </div>

                <div>
                    <label htmlFor="post-body" className="mb-2 block text-sm font-semibold text-slate-800">
                        Post
                    </label>
                    <textarea
                        id="body"
                        name="body"
                        placeholder="What would you like to share?"
                        rows={5}
                        className="w-full resize-y border border-slate-300 bg-white px-4 py-3 text-sm leading-6 text-slate-950 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15 placeholder:text-slate-400"
                    />
                </div>

                <div className="flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <button
                        type="submit"
                        disabled={pending}
                        className="inline-flex min-h-11 items-center justify-center bg-emerald-800 px-5 text-sm font-semibold text-white transition hover:bg-emerald-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 disabled:cursor-wait disabled:opacity-60"
                    >
                        {pending ? "Publishing..." : "Publish post"}
                    </button>
                    {state.error && (
                        <p className={`text-sm ${state.error ? "text-red-700" : "text-emerald-800"}`}>
                            {state.error}
                        </p>
                    )}
                </div>
            </form>
        </section>
    )
}

export default CreatePost