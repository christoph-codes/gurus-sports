import Link from "next/link";
import { HamburgerIcon, Icon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { useSideNav } from "@/providers/SidenavProvider";

import {
	toastTabLink,
	facebookLink,
	homepagePath,
	instagramLink,
} from "../../utils/navLinks";
import Container from "../Container";
import Logo from "../Logo";
import NavLink, { INavLinkProps, ILink } from "../NavLink";
import styles from "./Navigation.module.scss";

export interface INavigationProps {
	className?: string;
	links?: {
		link: ILink;
		dropdown?: INavLinkProps["dropdownLinks"];
		cta?: boolean;
	}[];
}

const Navigation = ({ links, className }: INavigationProps) => {
	const { toggleSideNav } = useSideNav();
	return (
		<Box
			as="nav"
			className={`${styles.Navigation} ${className || ""}`}
			marginBottom="24px"
			borderBottom={{
				base: "solid 1px",
				md: "none",
			}}
			borderColor="brand.secondary.hover"
		>
			<Container className={styles.Navigation__container}>
				<Link
					className={styles.Navigation__logoContainer}
					href={homepagePath}
				>
					<Logo className={styles.Navigation__logo} />
				</Link>
				<ul className={styles.Navigation__nav}>
					{links?.map((item, index) => (
						<NavLink
							key={index}
							dropdownLinks={item.dropdown}
							cta={item.cta}
							href={item.link.path}
							target={item.link.target}
						>
							{item.link.label}
						</NavLink>
					))}
					<NavLink href={instagramLink}>
						<Icon boxSize={8} as={GrInstagram} />
					</NavLink>
					<NavLink href={facebookLink}>
						<Icon boxSize={8} as={FaFacebook} />
					</NavLink>
				</ul>
				<Box className={styles.Navigation__mobileNav}>
					<NavLink
						className={styles.Navigation__mobileCTA}
						href={toastTabLink}
						cta
					>
						Order Online
					</NavLink>
					<button
						type="button"
						className={`${styles.Navigation__hamburger}`}
						onClick={() => toggleSideNav()}
					>
						<HamburgerIcon boxSize={8} />
					</button>
				</Box>
			</Container>
			<div className={styles.Navigation__utilityNav}>
				<Container paddingY={0}>
					<Text
						textAlign="right"
						fontFamily="Bebas Neue"
						fontSize="lg"
						lineHeight="1.5"
						marginBottom={0}
					>
						New location at SunRiver Golf Club, in st George!
					</Text>
				</Container>
			</div>
		</Box>
	);
};

export default Navigation;
