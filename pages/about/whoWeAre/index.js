import Head from 'next/head'
import Approch from '../../../components/Approch'
import TeamMembers from '../../../components/TeamMembers'
import Portfolio1 from '../../../components/Portfolio1'


export default function WhoWeAre() {
    return (
      <div >
        <Head>
          <title>Nick Petroleum | Who We Are</title>
          <meta name="description" content="Fuel your success with Nick Petroleum - the premier provider of high-quality fuels and exceptional customer service." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main>
        <Approch/>
        {/* <TeamMembers /> */}
        <Portfolio1 />
        </main>
  
  
      </div>
    )
  }