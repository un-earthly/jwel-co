import type { NextPage } from 'next'
import Head from 'next/head'
import HomeBanner from '../components/HomeBanner'
import Jwellary from '../components/Jwellary'
const Home: NextPage = ({ jwellaries }) => {
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
            jwellaries.map((j: { id: number; title: string; price: number; description: string; category: string; image: string }) => <Jwellary jewl={j} key={j.id} />)
          }
        </div>
      </main>
    </div>
  )
}

export default Home


export async function getServerSideProps() {
  const jwellaries = await fetch("https://fakestoreapi.com/products/category/jewelery").then(
    (res) => res.json()
  );

  return {
    props: {
      jwellaries,
    },
  };
}