import { IPost } from "@/types/IPost";
import { notFound } from "next/navigation";

export async function getPosts(): Promise<IPost[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: {revalidate: 60}
    })
    if (!response.ok) {
        throw new Error("Failed to fetch posts :(")
    }
    const posts: IPost[] = await response.json()
    return posts.slice(0, 6)
}

export async function getOnePost(id: string): Promise<IPost> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        cache: "no-store"
    })
    if (!response.ok) notFound()
    const post: IPost = await response.json()
    if (!post.id) notFound()
    return post
}