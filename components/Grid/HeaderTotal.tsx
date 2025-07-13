import { TableMonth } from '@/helpers';
import { FC } from 'react';

export const HeaderTotal: FC<{ total: TableMonth[] }> = ({ total }) => {
	return (
		<tr className="border-t border-r border-gray-300">
			<th className="p-3 text-gray-400 text-sm text-left border-l font-normal border-gray-300">Manager</th>
			<th className="text-gray-400 text-sm border-l border-gray-300">
				<div className="text-left font-normal">
					<div className="border-b border-gray-300 p-3">Total income:</div>
					<div className="p-3">Total active partners:</div>
				</div>
			</th>
			{total.map((item, idx) => (
				<th className="text-gray-500 text-sm font-normal border-l border-gray-300" key={idx}>
					<div className="text-left font-normal">
						<div className="border-b border-gray-300 p-3 flex">
							<div className="flex-1">$ {item?.plan.income}</div>
							<div className="flex-1">$ {item?.fact.income}</div>
						</div>
						<div className="p-3 flex">
							<div className="flex-1">{item?.plan.activePartners}</div>
							<div className="flex-1">{item?.fact.activePartners}</div>
						</div>
					</div>
				</th>
			))}
		</tr>
	);
};

export default HeaderTotal;
