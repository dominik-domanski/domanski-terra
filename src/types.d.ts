export type ConvertErrorObject = {
  config?: {
    url: string
    method: string
    data: unknown
  }
  message: string
  response?: {
    status: number
    data: unknown
  }
  stack?: string
}
