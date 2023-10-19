import dbConnect from '@/db/dbConnect'
import Session from '@/db/models/Session'

dbConnect()

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'POST':
        const sessionId = req.cookies.sessionId

        if (!sessionId) {
          res.status(400).json({ success: false })
        } else {
          await Session.deleteOne({ id: sessionId })

          res.setHeader('Set-Cookie', `sessionId=; HttpOnly; SameSite=Strict; Max-Age=0`)
          res.status(200).json({ success: true })
        }

        break;
    
      default:
        res.status(400).json({ success: false })
    }
  } catch (error) {
    res.status(500).json({ success: false })
  }
}