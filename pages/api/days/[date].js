import dbConnect from '@/db/dbConnect'
import Day from '@/db/models/Day'

dbConnect()

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'GET':
        const getCursor = await Day.findOne({ date: req.query.date })

        if (getCursor) {
          res.status(200).json({ success: true, data: getCursor })
        } else {
          res.status(400).json({ success: false })
        }

        break;

      case 'PUT':
        const putCursor = await Day.findOneAndUpdate(
          { date: req.query.date },
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
