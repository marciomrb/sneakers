import '../styles/main.scss';
import 'swiper/css';
import 'swiper/css/navigation';

import { useState } from 'react';

import Header from '../components/Header';

function MyApp({ Component, pageProps }) {

  const [ order, setOrder ] = useState(null);

  return (
    <>
      <Header order={order} setOrder={setOrder}/>
      <Component order={order} setOrder={setOrder} {...pageProps} />
    </>
  );
}

export default MyApp
