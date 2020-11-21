import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { GlobalStyles } from '../styles/global';
import * as gtag from '../lib/gtag';

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    // Register a Service worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', async (event) => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log(`Registered with scope ${registration.scope}`);
        } catch (error) {
          console.log(`Registration failed ${error}`);
        }
      });
    }
    // Listen to route changes for Google Analytics
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;
