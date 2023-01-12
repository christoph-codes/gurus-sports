/* eslint-disable react/no-danger */
import { Html, Head, Main, NextScript } from "next/document";

const Document = () => (
	<Html>
		<Head />
		<body>
			<Main />
			<NextScript />
			<noscript
				dangerouslySetInnerHTML={{
					__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MF8WDH6"
					height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
				}}
			/>
		</body>
	</Html>
);

export default Document;
