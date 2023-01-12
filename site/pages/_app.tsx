import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "../styles/theme";
import "../styles/globals.scss";
import SideNavProvider from "../providers/SidenavProvider";
import Script from "next/script";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Script id="google-tag-manager" strategy="afterInteractive">
				{`
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	  })(window,document,'script','dataLayer','GTM-MF8WDH6');
      `}
			</Script>

			<ChakraProvider theme={theme}>
				<SideNavProvider>
					<Component {...pageProps} />
				</SideNavProvider>
			</ChakraProvider>
		</>
	);
};

export default App;
