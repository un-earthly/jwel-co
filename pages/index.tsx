import type { NextPage } from 'next'
import Head from 'next/head'
import HomeBanner from '../components/HomeBanner'
import Jwellary from '../components/Jwellary'
const Home: NextPage = ({ jwellaries }: any) => {
  return (
    <div>
      <Head>
        <title>Jwel Co - Your Luxurious Jewellery Partner.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-6xl mx-auto">
        <HomeBanner />
        <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 gap-4 p-3'>
          {
            jwellaries.data.slice(0, 10).map((j: any) => <Jwellary jewl={j} key={j.id} />)
          }
        </div>
      </main>
    </div>
  )
}

export default Home


export async function getServerSideProps() {
  const jwellaries = await fetch("http://localhost:3000/api")
    .then(res => res.json());

  return {
    props: {
      jwellaries,
    },
  };
}