import dbConnect from '@/db/dbConnect'
import User from '@/db/models/User'

dbConnect()

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'GET':
        const getCursor = await User.find({})

        if (getCursor) {
          res.status(200).json({ success: true, data: getCursor })
        } else {
          res.status(400).json({ success: false })
        }

        break;
    }
  } catch (error) {
    res.status(500).json({ success: false })
  }
}

