import Head from 'next/head'
import Hero3 from '../components/Hero3'
import Portfolio1 from '../components/Portfolio1'
import Services3 from '../components/Services3'
import Services2 from '../components/Services2'
import Process from '../components/Process'
import Testimonial from '../components/Testimonial'
import Blog2 from "../components/Blog2"


export default function Home() {
  return (
    <div >
      <Head>
        <title>Nick Petroleum</title>
        <meta name="description" content="Fuel your success with Nick Petroleum - the premier provider of high-quality fuels and exceptional customer service." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero3 />
        <Process />
         {/* <div className='container'>
          <Services3 />
        </div>  */}
        <Services2 />       
        {/* <Portfolio1 /> */}
        <Blog2 />
        <Testimonial />
      </main>


    </div>
  )
}
