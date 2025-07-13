import { months, range } from './constants';
import { Months, MonthValues, RangeData, ResponseData, TableItem, TableMonth } from './types';

const cutMonths = (arr: unknown[], start: number) => {
	let cursor = start;
	const newArr = [];

	for (let i = 0; i < range; i++) {
		newArr.push(arr[cursor] || null);
		cursor = cursor === 11 ? 0 : cursor + 1;
	}

	return newArr;
};

const cutTable = (arr: TableItem[], start: number): TableItem[] => {
	return arr.map((item) => ({ ...item, months: cutMonths(item.months, start) as (TableMonth & MonthValues)[] }));
};

export const makeRange = (data: ResponseData, start: number): RangeData => {
	const total = cutMonths(data.total, start);
	const table: TableItem[] = cutTable(data.table, start);
	const monthsRange = cutMonths(months, start) as Months[];

	return {
		total: total as TableMonth[],
		table,
		months: monthsRange,
	};
};
