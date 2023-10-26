import 'bootstrap/dist/css/bootstrap.css'
import '../assets/scss/style.scss'
import '../styles/globals.css'
import Header3 from '../components/Header3'
import Footer2 from '../components/Footer2'


function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Header3 /> */}
      <Component {...pageProps} />
      <Footer2 />
    </>
  )
}

export default MyApp
