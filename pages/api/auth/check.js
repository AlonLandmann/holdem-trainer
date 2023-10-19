import dbConnect from '@/db/dbConnect'
import Session from '@/db/models/Session'
import User from '@/db/models/User'

dbConnect()

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'GET':
        const sessionId = req.cookies.sessionId
        const session = sessionId && await Session.findOne({ id: sessionId })
        const user = session && await User.findOne({ email: session.userEmail })

        if (!user) {
          res.status(200).json({ success: true, user: null })
        } else {
          res.status(200).json({ success: true, user: user })
        }
        
        break;
    
      default:
        res.status(400).json({ success: false })
    }
  } catch (error) {
    res.status(500).json({ success: false })
  }
}