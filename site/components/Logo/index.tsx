import { Image } from '@chakra-ui/react';
import styles from './Logo.module.scss';

export interface ILogoProps {
	className?: string;
	variant?: 'primary' | 'noTag' | 'light' | 'lightNoTag' | 'white' | 'icon';
}

const Logo = ({ variant = 'primary', className }: ILogoProps) => {
	const getLogo = {
		primary: '/logo.svg',
	};
	return (
		<Image
			alt="Guru's Sports Bar & Grill Logo"
			className={`${styles.Logo} ${className || ''}`}
			src={getLogo[variant]}
		/>
	);
};

export default Logo;
