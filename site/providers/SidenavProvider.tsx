import {
	createContext,
	ReactNode,
	useState,
	useContext,
	FC,
	useEffect,
} from "react";
import SideNav from "../components/Sidenav";

export interface ISideNavContext {
	isOpen: boolean;
	toggleSideNav: () => void;
}
export type TSideNavProps = {
	children?: ReactNode;
};

export const SideNavContext = createContext<ISideNavContext>({
	isOpen: false,
	toggleSideNav: () => {},
});

const SideNavProvider: FC<TSideNavProps> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleSideNav = () => setIsOpen(!isOpen);
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflowY = "hidden";
		} else {
			document.body.style.overflowY = "scroll";
		}
	}, [isOpen]);
	return (
		<SideNavContext.Provider value={{ isOpen, toggleSideNav }}>
			{children}
			<SideNav isOpen={isOpen} toggleSideNav={toggleSideNav} />
		</SideNavContext.Provider>
	);
};

export const useSideNav = () => useContext(SideNavContext);

export default SideNavProvider;
