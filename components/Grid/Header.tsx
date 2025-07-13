import { Months } from '@/helpers';
import { FC } from 'react';

export const Header: FC<{ months: Months[] }> = ({ months }) => (
	<tr className="table-row border-t border-r border-gray-300">
		<th className="bg-slate-100 p-3 border-l border-gray-300" />
		<th className="bg-slate-100 p-3 border-l border-gray-300" />
		{months.map((month) => (
			<th
				className="bg-slate-100 w-min-1000 p-3 border-l border-gray-300 text-gray-400 text-left font-normal"
				key={month}
			>
				<div>{month}</div>
				<div className="flex justify-between text-sm">
					<div className="flex-1">Plan</div>
					<div className="flex-1">Fact</div>
				</div>
			</th>
		))}
	</tr>
);

export default Header;
