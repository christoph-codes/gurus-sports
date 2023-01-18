export const toastTabLink = "https://www.toasttab.com/gurussportsgrill";
export const facebookLink =
	"https://www.facebook.com/profile.php?id=100088242930394";
export const instagramLink = "https://www.instagram.com/gurus_sports_grill/";

export const homepagePath: "/home" | "/" = "/";

export const navigationLinks = [
	{
		link: {
			label: "Home",
			path: homepagePath,
		},
	},
	{
		link: {
			label: "Menu",
			path: "/menu",
		},
	},
	{
		link: {
			label: "Locations",
			path: "/locations",
		},
	},
	{
		link: {
			label: "Contact",
			path: "/contact",
		},
	},
	{
		link: {
			label: "Order Online",
			path: toastTabLink,
		},
		cta: true,
	},
];

export const utilityLinks = [
	{
		link: {
			label: "Privacy Policy",
			path: "/privacy-policy",
		},
	},
	{
		link: {
			label: "Terms of Service",
			path: "/terms",
		},
	},
];
