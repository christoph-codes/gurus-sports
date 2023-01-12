import { Box, Heading, HeadingProps } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Eyebrow, { TEyebrow } from '../Eyebrow';

const headerSize = {
	h1: '3xl',
	h2: '2xl',
	h3: 'xl',
	h4: 'lg',
	h5: 'md',
	h6: 'sm',
};

export interface ITitleProps extends HeadingProps {
	children: ReactNode;
	eyebrow?: TEyebrow | false;
	h1?: boolean;
	h2?: boolean;
	h3?: boolean;
	h4?: boolean;
	h5?: boolean;
	h6?: boolean;
	textAlign?: HeadingProps['textAlign'];
	className?: string;
}

const Title = ({
	children,
	eyebrow,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	textAlign = 'left',
	className,
	...rest
}: ITitleProps & HeadingProps) => {
	const chosenHeader = h1
		? 'h1'
		: h2
		? 'h2'
		: h3
		? 'h3'
		: h4
		? 'h4'
		: h5
		? 'h5'
		: h6
		? 'h6'
		: 'h1';
	return (
		<Box className={className || ''}>
			{eyebrow &&
				(chosenHeader === 'h1' ||
					chosenHeader === 'h2' ||
					chosenHeader === 'h3') && (
					<Eyebrow color={eyebrow} align={textAlign} />
				)}
			<Heading
				color='brand.black.default'
				as={chosenHeader}
				size={headerSize[chosenHeader]}
				textAlign={textAlign}
				marginBottom={4}
				{...rest}
			>
				{children}
			</Heading>
		</Box>
	);
};

export default Title;
