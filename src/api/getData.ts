import { ResponseData } from '@/helpers';
import { useQuery } from '@tanstack/react-query';

export const GetData = () =>
	useQuery({
		queryKey: ['get-data'],
		queryFn: async (): Promise<{ data: ResponseData }> => {
			try {
				const res = await fetch('https://3snet.co/js_test/api.json');
				return await res.json();
			} catch (error) {
				throw new Error(`Произошла ошибка: ${(error as Error).message}`);
			}
		},
		staleTime: 5000,
	});
