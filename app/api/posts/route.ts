import { getPosts } from "@/lib/posts";
import { NextResponse } from "next/server";

export async function GET() {
    const posts = await getPosts()
    return NextResponse.json({success: true, data: posts})
}

export async function POST(request: Request) {
  try {
    const { title, body } = await request.json()
    if (
      typeof title !== "string" ||
      !title.trim() ||
      typeof body !== "string" ||
      !body.trim()
    ) {
      return NextResponse.json(
        { error: "Title and body are required." },
        { status: 400 }
      )
    }

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title.trim(),
        body: body.trim(),
        userId: 1,
      }),
    })

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to create the post. Please try again." },
        { status: 502 }
      )
    }

    const createdPost = await response.json()
    return NextResponse.json(createdPost, { status: 201 })
  } catch {
    return NextResponse.json(
      { error: "Invalid request or server error. Please try again." },
      { status: 500 }
    )
  }
}