// import App, { Container } from 'next/app';
// import Head from 'next/head';
// import React from 'react';
// import NProgress from 'nprogress';
// import Router, { withRouter } from 'next/router';
// import Layout from 'components/Layout';
// import 'styles/styles.scss';

// Router.onRouteChangeStart = () => NProgress.start();
// Router.onRouteChangeComplete = () => NProgress.done();
// Router.onRouteChangeError = () => NProgress.done();

// class MyApp extends App {
//   static async getInitialProps(props) {
//     const { Component, ctx } = props;
//     let pageProps = {};
//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps({ ctx });
//     }
//     return { pageProps };
//   }

//   render() {
//     const { Component, pageProps } = this.props;
//     return (
//       <Container>
//         <Head>
//           <title>UCI | AntScholar</title>
//         </Head>
//         <Layout>
//           <Component {...pageProps} />
//         </Layout>
//       </Container>
//     );
//   }
// }

// export default withRouter(MyApp);

import React from 'react';
import App, { Container } from 'next/app';
import Layout from 'components/Layout';

import { getStores, StoreProvider } from '../stores/stores';

class CustomApp extends App {
  static async getInitialProps(appContext) {
    // On server-side, this runs once and creates new stores
    // On client-side, this always reuses existing stores
    const mobxStores = getStores();

    // Make stores available to page's `getInitialProps`
    appContext.ctx.mobxStores = mobxStores;

    // Call "super" to run page's `getInitialProps`
    const appProps = await App.getInitialProps(appContext);

    // Gather serialization-friendly data from stores
    const initialData = {
      //postStoreInitialData: mobxStores.postStore.__data(),
    };

    // Send it to `render`
    return {
      ...appProps,
      initialData,
    };
  }

  render() {
    const { Component, pageProps, initialData } = this.props;

    // During SSR, this will create new store instances so having `initialData` is crucial.
    // During the client-side hydration, same applies.
    // From then on, calls to `getStores()` return existing instances.
    const stores = getStores(initialData);

    return (
      <StoreProvider value={stores}>
        <Container>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Container>
      </StoreProvider>
    );
  }
}

export default CustomApp;