export type Photo = {
  id: number,
  url: string
}

export type Comment = {
  id: number,
  text: string,
  date: number
}

export type PhotoWithComments = Photo & {
  comments: Array<Comment>
}