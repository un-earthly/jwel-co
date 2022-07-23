import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jwel Co - Your Luxurious Jewellery Partner.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-xl">Hello to the luxury</h1>
      </main>
    </div>
  )
}

export default Home
