import { Text, Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

export interface IAnnouncementBarProps {
	className?: string;
	children: ReactNode;
}

const AnnouncementBar = ({ className, children }: IAnnouncementBarProps) => {
	return (
		<Box
			paddingY={1}
			bgColor='brand.black.default'
			className={className || ''}
		>
			<Text
				as='span'
				display='block'
				textAlign='center'
				color='brand.white.default'
			>
				{children}
			</Text>
		</Box>
	);
};

export default AnnouncementBar;
