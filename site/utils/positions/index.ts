import { bartenders } from './_bartenders';
import { cooks } from './_cooks';
import { dishwashers } from './_dishwashers';
import { hosts } from './_hosts';
import { managers } from './_managers';
import { servers } from "./_servers";

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
	managers, cooks, bartenders, hosts, servers,  dishwashers, 
];
