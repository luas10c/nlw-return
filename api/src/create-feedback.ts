import prisma from './database/prisma'

import type { FeedbackCreateData, FeedbacksRepository } from './repositories/feedback-repository'

export class CreateFeedback implements FeedbacksRepository {
  async create(data: FeedbackCreateData) {
    const { type, description, screenshot } = data
    await prisma.feedback.create({
      data: {
        type,
        description,
        screenshot
      }
    })
  }
}