import express from 'express'
import nodemailer from 'nodemailer'
import prisma from './database/prisma'

import { CreateFeedback } from './create-feedback';
import { SubmitFeedback } from './use-cases/submit-feedback';
import { NodeMailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';

const router = express.Router()

router.post('/feedbacks', async (request, response) => {
  const { type, description, screenshot } = request.body

  const createFeedback = new CreateFeedback()
  const mailAdapter = new NodeMailerMailAdapter()
  
  const submitFeedback = new SubmitFeedback(createFeedback, mailAdapter)

  await submitFeedback.execute({ type, description, screenshot })
  
  return response.status(201).send()
})

router.get('/feedbacks', async (request, response) => {
  const feedbacks = await prisma.feedback.findMany()
  return response.status(200).json(feedbacks)
})

export default router;