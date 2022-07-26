import { useRouter } from "next/router";

import { ThemeProvider } from "styled-components";
import { Provider, useSelector } from "react-redux";
import { PageTransition } from "next-page-transitions";

import store, { wrapper } from "../store/store";
import { GlobalStyles } from "../modules/globalStyles";
import { lightTheme, darkTheme } from "../modules/themes";

import "../styles/globals.css";

import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  const isLight = useSelector((state) => state.ui.isLight);

  const router = useRouter();

  return (
    <Provider store={store}>
      <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
        <GlobalStyles />

        <Layout>
          {/* <PageTransition timeout={500} classNames="page-transition"> */}
            <Component {...pageProps} key={router.asPath} />
          {/* </PageTransition> */}
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
