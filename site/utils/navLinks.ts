import { INavigationProps } from '../components/Navigation';

export const bookLink = '/book';
export const facebookLink =
	'https://www.facebook.com/profile.php?id=100088242930394';
export const instagramLink = 'https://www.instagram.com/gurus_sports_grill/';

export const homepagePath: '/home' | '/' = '/';

export const navigationLinks: INavigationProps['links'] = [
	{
		link: {
			label: 'Home',
			path: homepagePath,
		},
	},
	{
		link: {
			label: 'Menu',
			path: '/menu',
		},
	},
	{
		link: {
			label: 'Locations',
			path: '/locations',
		},
	},
	{
		link: {
			label: 'Contact',
			path: '/contact',
		},
	},
	{
		link: {
			label: 'Order Online',
			path: bookLink,
		},
		cta: true,
	},
];

export const utilityLinks: INavigationProps['links'] = [
	{
		link: {
			label: 'Privacy Policy',
			path: '/privacy-policy',
		},
	},
	{
		link: {
			label: 'Terms of Service',
			path: '/terms',
		},
	},
];
