/* eslint-disable react/no-danger */
import { Html, Head, Main, NextScript } from "next/document";

const Document = () => (
	<Html>
		<Head>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossOrigin=""
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&display=swap"
				rel="stylesheet"
			/>
		</Head>
		<body>
			<Main />
			<NextScript />
			<noscript
				dangerouslySetInnerHTML={{
					__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5GM2RBF"
					height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
				}}
			/>
		</body>
	</Html>
);

export default Document;
