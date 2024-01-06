import sha256 from 'sha256'
import { v4 as uuid } from 'uuid'
import dbConnect from '@/db/dbConnect'
import Session from '@/db/models/Session'
import User from '@/db/models/User'
import tutorialRanges from '@/db/tutorial-ranges.json'

dbConnect()

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'POST':
        const newUser = {
          id: uuid(),
          createdAt: new Date(),
          email: req.body.email,
          username: req.body.username,
          hash: sha256(req.body.password),
          ranges: tutorialRanges,
          sessions: []
        }
        
        const newSession = {
          id: uuid(),
          createdAt: new Date(),
          userEmail: newUser.email
        }

        await User.create(newUser)
        await Session.create(newSession)
        
        res.setHeader('Set-Cookie', `sessionId=${newSession.id}; HttpOnly; SameSite=Strict; Max-Age=31536000`)
        res.status(201).json({ success: true, newUser: newUser })

        break;

      default:
        res.status(400).json({ success: false })
    }
  } catch (error) {
    res.status(500).json({ success: false })
  }
}