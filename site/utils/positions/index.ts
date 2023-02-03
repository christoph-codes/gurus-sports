import { bartender } from './_bartender';
import { cook } from './_cook';
import { dishwasher } from './_dishwasher';
import { host } from './_host';
import { manager } from './_manager';
import { server } from "./_server";

export interface IPosition {
	slug: string;
	title: string;
	shortDescription: string;
	pay?: string;
	responsibilities: string[],
	requirements: string[],
	closing: string;
}

export const positions: IPosition[] = [
	manager, cook, bartender, host, server,  dishwasher, 
];
