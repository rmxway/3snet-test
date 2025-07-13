import { useEffect, useState } from 'react';
import { GetData } from './api/getData';
import { makeRange } from '@/helpers/makeRange';
import { RangeData } from '@/helpers';
import { Grid } from '@/components';
import { Button } from '@/components/ui';

function App() {
	const { data, isSuccess, isLoading, isError, error } = GetData();
	const [start, setStart] = useState(5);
	const [rangeData, setRangeData] = useState<RangeData>();

	useEffect(() => {
		if (isSuccess && data !== undefined) {
			setRangeData(makeRange(data.data, start));
		}
	}, [data, isSuccess, start]);

	const prevMonth = () => {
		setStart((prev) => (prev == 0 ? 11 : prev - 1));
	};

	const nextMonth = () => {
		setStart((prev) => (prev === 11 ? 0 : prev + 1));
	};

	return (
		<div className="table-container">
			<div className="button-container">
				<Button className="prev-btn" onClick={prevMonth}>
					<i className="icofont icofont-arrow-up" />
				</Button>
				<Button className="next-btn" onClick={nextMonth}>
					<i className="icofont icofont-arrow-up" />
				</Button>
			</div>
			{isError && <div className="text-2xl text-red-700">{error.message ?? 'Что то пошло не так... '}</div>}
			{isLoading ? (
				<div className="text-3xl">Loading...</div>
			) : (
				rangeData !== undefined && <Grid data={rangeData} />
			)}
		</div>
	);
}

export default App;
