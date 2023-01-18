import { ITabsProps } from "./../../components/Tabs/index";
import { salads } from "./_salads";
import { starters } from "./_starters";
import { steaks } from "./_steaks";
import { combos } from "./_combos";
import { ribLovers } from "./_ribLovers";
import { chickenLovers } from "./_chickenLovers";
import { seasideSpecials } from "./_seasideSpecials";
import { fajitas } from "./_fajitas";
import { sides } from "./_sides";
import { sandwichesWraps } from "./_sandwichesWraps";
import { houseBurgers } from "./_houseBurgers";
import { pasta } from "./_pasta";
import { kids } from "./_kids";
import { desserts } from "./_desserts";

export const menu: ITabsProps["content"] = [
	starters,
	salads,
	steaks,
	combos,
	ribLovers,
	chickenLovers,
	seasideSpecials,
	fajitas,
	sides,
	sandwichesWraps,
	houseBurgers,
	pasta,
	kids,
	desserts,
];
