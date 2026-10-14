
"use server";

import { CreatePostState } from "@/types/IPost";
import { revalidatePath } from "next/cache";

export async function createPost(
  _prevState: CreatePostState,
  formData: FormData
): Promise<CreatePostState> {
  const title = formData.get("title");
  const body = formData.get("body");

  // Validate on the server
  if (
    typeof title !== "string" ||
    typeof body !== "string" ||
    !title.trim() ||
    !body.trim()
  ) {
    return { error: "Title and body are required." };
  }

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title.trim(),
          body: body.trim(),
          userId: 1,
        }),
      }
    );

    if (!response.ok) {
      return { error: "Failed to create post." };
    }

    const post: { id: number } = await response.json();

    revalidatePath("/posts");

    return {
      success: `Demo post created! ID: ${post.id}`,
    };
  } catch {
    return { error: "Something went wrong. Please try again." };
  }
}



export async function deletePost(postId: number) {
  // Validate the ID on the server.
  if (!Number.isInteger(postId) || postId <= 0) {
    throw new Error("Invalid post ID.");
  }

  // TODO: Check that the current user is authenticated
  // and has permission to delete this post.

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    { method: "DELETE" }
  );

  if (!response.ok) {
    throw new Error("Failed to delete post.");
  }

  revalidatePath("/posts");
}
