export interface IPost {
  id: number
  title: string
  body: string
}

export type CreatePostState = {
  success?: string;
  error?: string;
};