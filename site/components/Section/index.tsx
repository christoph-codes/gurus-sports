import { Box, BoxProps, Text } from '@chakra-ui/react';
import { StaticImageData } from 'next/image';
import { FC, ReactNode } from 'react';
import Container from '../Container';
import Title from '../Title';
import styles from './Section.module.scss';

export type ISectionProps = {
	children?: ReactNode;
	className?: string;
	containerClass?: string;
	hideContainer?: boolean;
	bgColor?: string;
	bgImg?: StaticImageData;
	title?: string;
	description?: string;
};

const Section: FC<ISectionProps & BoxProps> = ({
	children,
	className,
	containerClass,
	hideContainer,
	bgColor,
	bgImg,
	title,
	description,
	...rest
}) => {
	const content = (
		<>
			{title && (
				<Title
					h2
					className={styles.Section__title}
					textAlign='center'
					marginBottom={8}
				>
					{title}
				</Title>
			)}
			{description && (
				<Text className={styles.Section__description}>
					{description}
				</Text>
			)}
			{children}
		</>
	);
	return (
		<Box
			as='section'
			bgColor={bgColor || ''}
			className={`${styles.Section} ${className}`}
			paddingX={4}
			backgroundImage={
				bgImg && {
					backgroundImage: `url(${bgImg.src})`,
					backgroundColor: 'unset',
				}
			}
			{...rest}
		>
			{!hideContainer ? (
				<Container className={containerClass}>{content}</Container>
			) : (
				content
			)}
		</Box>
	);
};
export default Section;
