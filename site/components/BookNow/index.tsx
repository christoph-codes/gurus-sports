import { Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { bookLink } from '../../utils/navLinks';
import Button from '../Button';
import Section from '../Section';
import Title from '../Title';
import styles from './BookNow.module.scss';

export interface IBookNowProps {
	title: string;
	description?: string | ReactNode;
}

const BookNow = ({ title, description }: IBookNowProps) => {
	return (
		<Section
			bgImage='/book_bg.png'
			className={styles.BookNow}
			containerClass={styles.BookNow__container}
		>
			<Title textAlign='center' color='white' h2>
				{title}
			</Title>
			{description && (
				<Text
					textAlign='center'
					marginBottom={4}
					fontSize={24}
					color='white'
					fontWeight='bold'
				>
					{description}
				</Text>
			)}
			<Button variant='white' href={bookLink}>
				Book Now
			</Button>
		</Section>
	);
};

export default BookNow;
