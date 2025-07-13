import icofont from '@/public/assets/fonts/icofont/icofont.json';

export type Icofont = keyof typeof icofont;
export type Months =
	| 'January'
	| 'February'
	| 'March'
	| 'April'
	| 'May'
	| 'June'
	| 'July'
	| 'August'
	| 'September'
	| 'November'
	| 'October'
	| 'December'
	| null;

export interface MonthValues {
	activePartners: number;
	income: number;
}

export interface TableMonth {
	fact: MonthValues;
	plan: MonthValues;
}

export interface TableItem {
	adminId: number;
	adminName: string;
	id: number;
	months: (TableMonth & MonthValues)[];
	year: number;
}

export interface ResponseData {
	table: TableItem[];
	total: TableMonth[];
}

export interface RangeData extends ResponseData {
	months: Months[];
}
