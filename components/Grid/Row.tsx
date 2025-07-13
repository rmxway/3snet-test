import { TableItem } from '@/helpers';
import { FC } from 'react';

const NoData = () => <span className="text-red-700 opacity-50">No data</span>;

export const Row: FC<{ data: TableItem }> = ({ data }) => (
	<tr className="border-t border-r border-gray-300">
		<td className="p-3 text-gray-400 text-md border-l border-gray-300">{data.adminName}</td>
		<td className="text-gray-400 text-sm border-l border-gray-300">
			<div className="text-left font-normal">
				<div className="border-b border-gray-300 p-3">Income:</div>
				<div className="p-3">Active partners:</div>
			</div>
		</td>
		{data.months.map((item, idx) => (
			<th className="text-gray-500 text-sm font-normal border-l border-gray-300" key={idx}>
				<div className="text-left font-normal">
					<div className="border-b border-gray-300 p-3 flex">
						<div className="flex-1">{item?.plan.income ? `$ ${item?.plan.income}` : <NoData />}</div>
						<div className="flex-1">{item?.fact.income ? `$ ${item?.fact.income}` : <NoData />}</div>
					</div>
					<div className="p-3 flex">
						<div className="flex-1">{item?.plan.activePartners ?? <NoData />}</div>
						<div className="flex-1">{item?.fact.activePartners ?? <NoData />}</div>
					</div>
				</div>
			</th>
		))}
	</tr>
);

export default Row;
