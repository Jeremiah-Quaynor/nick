import Head from 'next/head'
import Hero3 from '../../../components/Hero3'
import Hero1 from '../../../components/Hero1'
import PageBanner from '../../../components/PageBanner';
import bannerBg from '../../../assets/img/careers.jpg';


export default function Careers() {
    return (
      <div >
        <Head>
          <title>Nick Petroleum | Careers</title>
          <meta name="description" content="Fuel your success with Nick Petroleum - the premier provider of high-quality fuels and exceptional customer service." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main>
        <PageBanner bannerBg={bannerBg} heading="Careers" currentPage="Careers" />
        {/* <Hero3 /> */}
        {/* <TeamMembers/> */}
        </main>
  
  
      </div>
    )
  }