import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux"
import store from '../redux/app/store';

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <Navbar>
      <Component {...pageProps} />
      <Footer />
      <ToastContainer />
    </Navbar>
  </Provider>
}

export default MyApp

