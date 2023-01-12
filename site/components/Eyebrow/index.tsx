import { Box, BoxProps, HeadingProps } from '@chakra-ui/react';

export type TEyebrow =
	| 'primary'
	| 'secondary'
	| 'tertiary'
	| 'quad'
	| 'black'
	| 'white';

export interface IEyebrowProps {
	color?: TEyebrow;
	align?: HeadingProps['textAlign'];
}

const Eyebrow = ({ color, align, ...rest }: IEyebrowProps & BoxProps) => {
	return (
		<Box
			bg={`brand.${color}.default`}
			width='72px'
			height={2}
			marginBottom={4}
			borderRadius={8}
			marginX={align === 'center' && 'auto'}
			{...rest}
		/>
	);
};

export default Eyebrow;
