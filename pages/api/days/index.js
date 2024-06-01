import dbConnect from '@/db/dbConnect'
import Day from '@/db/models/Day'

dbConnect()

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'GET':
        const getCursor = await Day.find({})

        if (getCursor) {
          res.status(200).json({ success: true, data: getCursor })
        } else {
          res.status(400).json({ success: false })
        }

        break;
      case 'POST':
        await Day.create(req.body)

        res.status(201).json({ success: true })

        break;

      default:
        res.status(400).json({ success: false })
    }
  } catch (error) {
    res.status(500).json({ success: false })
  }
}

