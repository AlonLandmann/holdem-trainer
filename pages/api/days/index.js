import dbConnect from '@/db/dbConnect'
import Day from '@/db/models/Day'

dbConnect()

export default async function handler(req, res) {
  try {
    switch (req.method) {
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

