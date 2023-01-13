import { Box } from "@chakra-ui/react";
import Script from "next/script";
import styles from "./InstagramFeed.module.scss";

const InstagramFeed = () => (
	<Box className={styles.InstagramFeed}>
		<blockquote
			className={`instagram-media ${styles.InstagramFeed__iframe}`}
			data-instgrm-permalink="https://www.instagram.com/gurussportsgrill/"
			data-instgrm-version="14"
			style={{ padding: 0, width: "100%" }}
		/>
		<Script async src="//www.instagram.com/embed.js" />
	</Box>
);

export default InstagramFeed;
