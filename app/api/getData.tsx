// hooks/useFetchData.ts
import { fetchData } from '@/app/utils';
import { useQuery } from '@tanstack/react-query';

const useFetchData = (url: string) => {
  return useQuery(['data', url], () => fetchData(url));
};
export default useFetchData;
