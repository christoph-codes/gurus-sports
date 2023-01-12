import Link from 'next/link';
import { Box, Text } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import styles from './NavLink.module.scss';
import { ReactNode, useState } from 'react';

export interface ILink {
	label: string;
	path: string;
	target?: HTMLAnchorElement['target'];
}

export interface INavLinkProps {
	href?: string;
	className?: string;
	children: ReactNode | string;
	dropdownLinks?: ILink[];
	cta?: boolean;
	target?: HTMLAnchorElement['target'];
	onClick?: () => void;
}

const NavLink = ({
	href,
	className,
	dropdownLinks,
	children,
	cta,
	target,
	...rest
}: INavLinkProps) => {
	const [active, setActive] = useState(false);
	const doDropdownsExist: boolean = dropdownLinks?.length > 0;
	const SubNavigationLink = ({ label, path }) => {
		return (
			<Link className={`${styles.NavLinkSub} ${className}`} href={path}>
				<Text as='span'>{label}</Text>
			</Link>
		);
	};
	return (
		<>
			<Link
				onMouseEnter={() => {
					setActive(true);
				}}
				onMouseOut={() => {
					setActive(false);
				}}
				className={`${styles.NavLink} ${
					cta ? styles.NavLink__CTA : ''
				} ${className} ${
					active && doDropdownsExist ? styles.NavLinkActive : ''
				}`}
				href={href || '#'}
				target={target}
				{...rest}
			>
				<Text as='span'>
					{children}
					{doDropdownsExist && <ChevronDownIcon />}
				</Text>
			</Link>
			{doDropdownsExist && (
				<Box
					className={styles.NavLink__dropdown}
					onMouseLeave={() => setActive(false)}
				>
					{dropdownLinks?.map((link, index) => {
						return (
							<SubNavigationLink
								key={index}
								label={link.label}
								path={link.path}
							/>
						);
					})}
				</Box>
			)}
		</>
	);
};

export default NavLink;
