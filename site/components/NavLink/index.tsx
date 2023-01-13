import { ReactNode, useState } from "react";
import Link from "next/link";
import { Box, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import styles from "./NavLink.module.scss";

export interface ILink {
	label: string;
	path: string;
	target?: HTMLAnchorElement["target"];
}

export interface ISubNavLink {
	label: ILink["label"];
	path: ILink["path"];
}

export interface INavLinkProps {
	href?: string;
	className?: string;
	children: ReactNode | string;
	dropdownLinks?: ILink[];
	cta?: boolean;
	target?: HTMLAnchorElement["target"];
	onClick?: () => void;
}

const SubNavigationLink = ({ label, path }: ISubNavLink) => (
	<Link className={`${styles.NavLinkSub}`} href={path}>
		<Text as="span">{label}</Text>
	</Link>
);

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
	const doDropdownsExist: boolean | undefined =
		dropdownLinks && dropdownLinks?.length > 0;

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
					cta ? styles.NavLink__CTA : ""
				} ${className} ${
					active && doDropdownsExist ? styles.NavLinkActive : ""
				}`}
				href={href || "#"}
				target={target}
				{...rest}
			>
				<Text as="span">
					{children}
					{doDropdownsExist && <ChevronDownIcon />}
				</Text>
			</Link>
			{doDropdownsExist && (
				<Box
					className={styles.NavLink__dropdown}
					onMouseLeave={() => setActive(false)}
				>
					{dropdownLinks?.map((link, index) => (
						<SubNavigationLink
							key={index}
							label={link.label}
							path={link.path}
						/>
					))}
				</Box>
			)}
		</>
	);
};

export default NavLink;
