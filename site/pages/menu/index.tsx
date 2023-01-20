import Button from "@/components/Button";
import HighlightCards from "@/components/HighlightCards";
import PageHeader from "@/components/PageHeader";
import Tabs from "@/components/Tabs";
import PageTemplate from "@/templates/Page";
import { menu } from "@/utils/menu";
import { toastTabLink } from "@/utils/navLinks";
import { Flex } from "@chakra-ui/react";
import styles from "./Menu.module.scss";

const Menu = () => {
	return (
		<PageTemplate
			className={styles.Menu}
			metaTitle="Menu » Grur's Sports Bar & Grill"
			metaDescription="View our menu and our amazing selection of our signature dishes for Guru's Sports Bar & Grill located in St. George, Utah"
		>
			<PageHeader
				title="Menu"
				description="View our menu and our amazing selection of our signature dishes for Guru's Sports Bar & Grill located in St. George, Utah"
			/>
			<Tabs content={menu} className={styles.Menu__tabs} />
			<Flex justifyContent="center" paddingBottom="64px">
				<Button href={toastTabLink} target="_blank">
					Order Now
				</Button>
			</Flex>
			<HighlightCards />
		</PageTemplate>
	);
};

export default Menu;
