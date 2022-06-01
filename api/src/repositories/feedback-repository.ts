export type FeedbackCreateData = {
  type: string
  description: string
  screenshot?: string
}

export type FeedbacksRepository = {
  create: (data: FeedbackCreateData) => Promise<void>
}