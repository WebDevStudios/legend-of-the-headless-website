import 'pure-react-carousel/dist/react-carousel.es.css'
import '@/styles/index.css'
import PropTypes from 'prop-types'

export default function App({Component, pageProps}) {
  return <Component {...pageProps} />
}

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired
}
