import { SubmitFeedback } from './submit-feedback';
describe('Submit feedback', () => {
  const createFeedbackSpy = jest.fn()
  const sendMailSpy = jest.fn()

  const submitFeedback = new SubmitFeedback(
    { create: createFeedbackSpy },
    { send: sendMailSpy }
  )

  it('should be able to submit a feedback', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        description: 'Example description',
        screenshot: 'data:image/png;base64,adasdadsaewqweqwwsdasdada'
      })
    ).resolves.not.toThrow()

    expect(createFeedbackSpy).toHaveBeenCalled()
    expect(sendMailSpy).toHaveBeenCalled()
  })

  it('should not be able to submit feedback without type', async () => {
    await expect(
      submitFeedback.execute({
        type: '',
        description: 'Example description',
        screenshot: 'data:image/png;base64,adasdadsaewqweqwwsdasdada'
      })
    ).rejects.toThrow()
  })

  it('should not be able to submit feedback without description', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        description: '',
        screenshot: 'data:image/png;base64,adasdadsaewqweqwwsdasdada'
      })
    ).rejects.toThrow()
  })

  it('should not be able to submit feedback an invalid screenshot', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        description: 'Está tudo bugado!',
        screenshot: 'screenshot.png'
      })
    ).rejects.toThrow()
  })
})