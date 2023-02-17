import Spot from '@/js/Spot'
import dbConnect from '@/js/dbConnect'

dbConnect()

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'PUT': 
        const putCursor = await Spot.findOneAndUpdate(
          { id: req.query.spotId },
          req.body,
          { new: true, runValidators: true }
        )
  
        if (putCursor) {
          res.status(200).json({ success: true })
        } else {
          res.status(400).json({ success: false })
        }

        break;

      default:
        res.status(400).json({ success: false })
    }
  } catch (error) {
    res.status(400).json({ success: false })
  }
}
