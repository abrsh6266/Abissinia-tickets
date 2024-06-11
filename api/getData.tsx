// hooks/useFetchData.ts
import { fetchData } from '@/app/utils';
import { useQuery } from '@tanstack/react-query';

const useFetchData = (url: string, page: number, limit: number) => {
  return useQuery(['data', url, page, limit], () => fetchData(`${url}?page=${page}&limit=${limit}`));
};


export const useFetchData2 = (url: string) => {
  return useQuery(['data', url], () => fetchData(url));
};
export const useFetchData3 = (url: string, p0: { onSuccess: (data: any) => void; }) => {
  return useQuery(['data', url], () => fetchData(url));
};
export default useFetchData;

