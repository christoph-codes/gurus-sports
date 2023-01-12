import { ReactNode } from 'react';
import {
	Accordion as ChakraAccordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	StyleProps,
	AccordionProps,
	Box,
} from '@chakra-ui/react';
import styles from './Accordion.module.scss';

export interface IAccordionItem {
	title: string;
	content: ReactNode | string;
}

export interface IAccordionProps {
	items: IAccordionItem[];
	style?: StyleProps;
	theme?: 'primary' | 'secondary' | 'tertiary' | 'quad' | 'black';
}

const Accordion = ({
	items,
	style,
	theme,
	...rest
}: IAccordionProps & AccordionProps) => {
	return (
		<ChakraAccordion
			className={`${styles.Accordion} ${style}`}
			allowToggle
			defaultIndex={0}
			{...rest}
		>
			{items.map((item, index) => {
				return (
					<AccordionItem key={index} border='none'>
						<AccordionButton
							paddingY={4}
							fontWeight='bold'
							_expanded={{
								color: `brand.${theme}.default`,
								backgroundColor: `brand.${theme}.light`,
								borderRadius: 8,
							}}
						>
							<Box
								as='span'
								flex='1'
								textAlign='left'
								fontSize='lg'
							>
								{item.title}
							</Box>

							<AccordionIcon />
						</AccordionButton>
						<AccordionPanel paddingY={4}>
							{item.content}
						</AccordionPanel>
					</AccordionItem>
				);
			})}
		</ChakraAccordion>
	);
};

export default Accordion;
