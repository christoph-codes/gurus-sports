import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import Title from '../Title';
import styles from './FlexCard.module.scss';

export interface IFlexCardProps {
	link?: string;
	bgImage?: string;
	cardColor?: string;
	children?: string;
}

const FlexCard = ({ link, bgImage, cardColor, children }: IFlexCardProps) => {
	return (
		<Link className={styles.FlexCard__link} href={link || '#'}>
			<Box
				className={styles.FlexCard}
				as='article'
				bgImage={bgImage || '/paint_pour_flex_card.png'}
				backgroundSize='cover'
				backgroundPosition='center'
				borderRadius={16}
				width='100%'
				marginBottom={{ base: 4, sm: 0 }}
			>
				{children && (
					<Box
						padding='4'
						bgColor={cardColor}
						marginBottom={0}
						borderBottomLeftRadius={16}
						borderBottomRightRadius={16}
					>
						<Title
							textAlign='center'
							h6
							marginBottom={0}
							color='white'
						>
							{children}
						</Title>
					</Box>
				)}
			</Box>
		</Link>
	);
};

export default FlexCard;
