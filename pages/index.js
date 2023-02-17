import Head from 'next/head'
import Home from '@/components/Home'
import dbConnect from '@/js/dbConnect'
import Spot from '@/js/Spot'
import getRandomCards from '@/js/getRandomCards'

export default function HomePage({ spotJson, menuJson, holeCardsJson }) {
  return (
    <>
      <Head>
        <title>Holdem Trainer</title>
      </Head>
      <main>
        <Home
          spot={JSON.parse(spotJson)}
          menu={JSON.parse(menuJson)}
          holeCards={JSON.parse(holeCardsJson)}
        />
      </main>
    </>
  )
}

export async function getServerSideProps() {
  dbConnect()

  const spot = await Spot.findOne({ id: 0 })
  const menu = await Spot.find({}, { id: 1, title: 1 })

  return {
    props: {
      spotJson: JSON.stringify(spot),
      menuJson: JSON.stringify(menu),
      holeCardsJson: JSON.stringify(getRandomCards())
    }
  }
}
