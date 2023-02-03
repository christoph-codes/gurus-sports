import { bluffToastTab, sunriverToastTab } from "./navLinks";

export const locationDetails = [
	{
		title: "Sunriver",
		new: true,
		address1: "4210 Bluegrass Way",
		address2: "",
		cityStateZip: "St. George, UT 84790",
		phone: "435.773.4111",
		googleMap: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d738.622777989623!2d-113.61860445629439!3d37.03629418574884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ca4f9dba03cfcd%3A0x43412bc867b174f1!2s4210%20Bluegrass%20Way%2C%20St.%20George%2C%20UT%2084790!5e0!3m2!1sen!2sus!4v1674065631878!5m2!1sen!2sus`,
		hours: [
			`Sunday: 7am - 9pm`,
			`Monday-Saturday: 7am - 9pm`,
		],
		notes: "Located in the Sunriver Golf Course just off exit 2 in St. George, UT near the Arizona boarder. The Clubhouse is located just behind the SunRiver St.George community center off Bluegrass Way. Breakfast is served!",
		toasttab: sunriverToastTab,
	},
	{
		title: "Bluff",
		new: false,
		address1: "1091 N. Bluff St.",
		address2: "Ste. 1400",
		cityStateZip: "St. George, UT 84770",
		phone: "435.275.4248",
		googleMap: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d916.7213229060484!2d-113.60234380612282!3d37.124990417608934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ca4499e791926f%3A0xaa572d82e1a6fb03!2s1091%20N%20Bluff%20St%2C%20St.%20George%2C%20UT%2084770!5e0!3m2!1sen!2sus!4v1674065872985!5m2!1sen!2sus`,
		hours: [
			`Sunday: 11am - 9pm`,
			`Monday-Thursday: 11am - 9:30pm`,
			`Friday-Saturday: 11am - 10pm`,
		],
		notes: "Located across the street from the Dixie Red Hills Golf Course. Major cross streets are Bluff St. & Sunset Blvd.",
		toasttab: bluffToastTab,
	},
];