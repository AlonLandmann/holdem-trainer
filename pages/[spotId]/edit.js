import Head from 'next/head'
import Edit from '@/components/Edit'
import dbConnect from '@/js/dbConnect'
import Spot from '@/js/Spot'

export default function HomePage({ spotJson, menuJson }) {
  return (
    <>
      <Head>
        <title>Holdem Trainer</title>
      </Head>
      <main>
        <Edit
          spot={JSON.parse(spotJson)}
          menu={JSON.parse(menuJson)}
        />
      </main>
    </>
  )
}

export async function getServerSideProps({ query: { spotId } }) {
  dbConnect()

  const spot = await Spot.findOne({ id: spotId })
  const menu = await Spot.find({}, { id: 1, title: 1 })

  return {
    props: {
      spotJson: JSON.stringify(spot),
      menuJson: JSON.stringify(menu)
    }
  }
}
