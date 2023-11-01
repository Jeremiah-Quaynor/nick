import Head from 'next/head'
import Hero3 from '../components/Hero3'
import Portfolio1 from '../components/Portfolio1'
import Services3 from '../components/Services3'
import Services2 from '../components/Services2'
import Process from '../components/Process'
import Testimonial from '../components/Testimonial'
import Blog2 from "../components/Blog2"
import TopNav from "../components/TopNav"
import { useGlobalContext } from '../context/globalContext'
import { useEffect } from 'react'
import Carousel from '../components/Carousel'
import Image from 'next/image'
import home_background from "../assets/img/home_background.png";
import HomeSecond from '../components/HomeSecond'
import HomeThird from "../components/HomeThird"
import HomeFourth from '../components/HomeFourth'


export default function Home() {

  const { showSideNav, setShowSideNav } = useGlobalContext();

  useEffect(() => {
    setShowSideNav(false)
  }, [])

  return (
    <div >
      <Head>
        <title>Nick Petroleum</title>
        <meta name="description" content="Fuel your success with Nick Petroleum - the premier provider of high-quality fuels and exceptional customer service." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      {/* <TopNav /> */}
        {/* <Hero3 /> */}
        {/* <div className="z-50 opacity-80">
          <TopNav showSideNav={showSideNav} setShowSideNav={setShowSideNav} />
        </div> */}
        <div className="mt-[-10%] z-0 w-screen w-full">
          <div className='w-screen'>
            <Image src={home_background} className='w-full h-full object-cover'/>
          </div>
          <div className="mt-[-40%] z-0 w-screen w-full">
            <Carousel />
          </div>
        </div>
        <HomeSecond />
        <HomeThird />
        <HomeFourth />
        {/* <Process /> */}
         {/* <div className='container'>
          <Services3 />
        </div>  */}
        {/* <Services2 />        */}
        {/* <Portfolio1 /> */}
        <Blog2 />
        {/* <Testimonial /> */}
      </main>


    </div>
  )
}
