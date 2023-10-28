import sha256 from 'sha256'
import { v4 as uuid } from 'uuid'
import dbConnect from '@/db/dbConnect'
import Session from '@/db/models/Session'
import User from '@/db/models/User'

dbConnect()

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'POST':
        const user = await User.findOne({ email: req.body.email })

        if (!user) {
          res.status(400).json({ success: false, reason: 'user not found' })
        } else if (sha256(req.body.password) !== user.hash) {
          res.status(401).json({ success: false, reason: 'password is false' })
        } else {
          await Session.deleteMany({ userEmail: user.email })

          const newSession = {
            id: uuid(),
            createdAt: new Date(),
            userEmail: user.email
          }

          await Session.create(newSession)

          res.setHeader('Set-Cookie', `sessionId=${newSession.id}; HttpOnly; SameSite=Strict; Max-Age=31536000`)
          res.status(201).json({ success: true })
        }

        break;

      default:
        res.status(400).json({ success: false })
    }
  } catch (error) {
    res.status(500).json({ success: false })
  }
}