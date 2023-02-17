import Head from 'next/head'
import Home from '@/components/Home'
import dbConnect from '@/js/dbConnect'
import Spot from '@/js/Spot'
import getRandomCards from '@/js/getRandomCards'

export default function HomePage({ spotJson, holeCardsJson }) {
  return (
    <>
      <Head>
        <title>Holdem Trainer</title>
      </Head>
      <main>
        <Home
          spot={JSON.parse(spotJson)}
          holeCards={JSON.parse(holeCardsJson)}
        />
      </main>
    </>
  )
}

export async function getServerSideProps() {
  dbConnect()

  const spot = await Spot.findOne({ id: 0 })

  return {
    props: {
      spotJson: JSON.stringify(spot),
      holeCardsJson: JSON.stringify(getRandomCards())
    }
  }
}
