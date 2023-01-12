import { Box, Grid, Image } from '@chakra-ui/react';
import styles from './InstagramFeed.module.scss';
import Script from 'next/script';

// const InstagramFeed = ({ posts }) => {
// 	return (
// 		<Box className={styles.InstagramFeed}>
// 			<Grid
// 				gap={6}
// 				justifyContent='space-between'
// 				templateColumns='repeat(4, 1fr)'
// 			>
// 				{posts?.map((post, index) => {
// 					return (
// 						<Link href={post.permalink} target='_blank' key={index}>
// 							<Image
// 								maxWidth={284}
// 								maxHeight={284}
// 								objectFit='cover'
// 								width='100%'
// 								height='auto'
// 								src={
// 									post.media_type === 'IMAGE'
// 										? post.media_url
// 										: post.thumbnail_url
// 								}
// 								alt={post.caption}
// 							/>
// 						</Link>
// 					);
// 				})}
// 			</Grid>
// 		</Box>
// 	);
// };

const InstagramFeed = () => {
	return (
		<Box className={styles.InstagramFeed}>
			<blockquote
				className={`instagram-media ${styles.InstagramFeed__iframe}`}
				data-instgrm-permalink="https://www.instagram.com/gurussportsgrill/"
				data-instgrm-version="14"
				style={{ padding: 0, width: '100%' }}
			></blockquote>
			<Script async src="//www.instagram.com/embed.js" />
		</Box>
	);
};

export default InstagramFeed;
