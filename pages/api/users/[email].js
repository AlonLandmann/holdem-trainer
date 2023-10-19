import dbConnect from '@/db/dbConnect'
import User from '@/db/models/User'

dbConnect()

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'GET':
        const getCursor = await User.findOne({ email: req.query.email })

        if (getCursor) {
          res.status(200).json({ success: true, data: getCursor })
        } else {
          res.status(400).json({ success: false })
        }

        break;
        
      case 'PUT':
        const putCursor = await User.findOneAndUpdate(
          { email: req.query.email },
          req.body,
          { new: true, runValidators: true }
        )

        if (putCursor) {
          res.status(200).json({ success: true, data: putCursor })
        } else {
          res.status(400).json({ success: false })
        }

        break;

      default:
        res.status(400).json({ success: false })
    }
  } catch (error) {
    res.status(500).json({ success: false })
  }
}
