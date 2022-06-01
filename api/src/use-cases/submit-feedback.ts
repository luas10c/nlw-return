import { FeedbacksRepository } from './../repositories/feedback-repository';
import { MailAdapter } from './../adapters/mail-adapter';

type SubmitFeedbackRequest = {
  type: string
  description: string
  screenshot?: string
}

export class SubmitFeedback {
  constructor(
    private readonly feedbacksRepository: FeedbacksRepository,
    private readonly mailAdapter: MailAdapter
  ){}

  async execute(request: SubmitFeedbackRequest) {
    const { type, description, screenshot } = request

    if (!type) {
      throw new Error('Type is required.')
    }

    if (!description) {
      throw new Error('Description is required.')
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Invalid screenshot format.')
    }

    await this.feedbacksRepository.create({
      type,
      description,
      screenshot
    })

    await this.mailAdapter.send({
      subject: 'Novo feedback!',
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário: ${description}</p>`,
        screenshot ? `<img src=${screenshot} />` : '',
        `</div>`
      ].join('\n')
    })
  }
}