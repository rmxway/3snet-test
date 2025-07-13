import { RangeData } from '@/helpers';
import { FC, memo } from 'react';
import Header from './Header';
import HeaderTotal from './HeaderTotal';
import Row from './Row';

export const Grid: FC<{ data: RangeData }> = memo(({ data }) => {
	const { months, table, total } = data;

	return (
		<table className="table-fixed w-full border-b border-gray-300">
			<thead>
				<Header {...{ months }} />
				<HeaderTotal {...{ total }} />
			</thead>
			<tbody>{table?.map((item) => <Row data={item} key={item.id} />)}</tbody>
		</table>
	);
});

export default Grid;
