"use client"

import { useFormStatus } from 'react-dom'
import { deletePost } from './actions'

const DeleteButton = () => {
    const {pending} = useFormStatus()
    return (
        <button type='submit' disabled={pending} className='mt-3 cursor-pointer rounded-md border border-red-200 px-3 py-1.5 text-sm text-red-700 disabled:opacity-50'>
            {pending ? "Deleting..." : "Delete"}
        </button>
    )
}

const DeletePost = ({postId}: {postId: number}) => {
  return (
    <form action={deletePost.bind(null, postId)}>
        <DeleteButton/>
    </form>
  )
}

export default DeletePost