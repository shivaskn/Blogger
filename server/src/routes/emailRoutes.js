import express from 'express'
import { deleteEmails, emailSubscribe, getAllEmail } from '../controller/emailController.js'

const emailRouter = express.Router()

emailRouter.post('/subscribe',emailSubscribe);
emailRouter.get('/all',getAllEmail);
emailRouter.delete('/delete/:_id',deleteEmails);

export default emailRouter