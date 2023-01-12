import { Box, BoxProps, Text } from '@chakra-ui/react';
import { FC } from 'react';
import styles from './Loader.module.scss';

export type TLoaderProps = {
	className?: string;
	isLoading?: boolean;
};

const Loader: FC<TLoaderProps & BoxProps> = ({
	className,
	isLoading,
	...rest
}) => {
	if (isLoading) {
		return (
			<Box className={`${styles.Loader} ${className}`} {...rest}>
				<span />
				<span />
				<span />
				<span />
				<span />
			</Box>
		);
	}
	return null;
};

export default Loader;
