import { useQuery } from '@tanstack/react-query';
import { ResponseDeputado } from '../interfaces/response-deputado';

const API_BASE_URL = 'https://dadosabertos.camara.leg.br/api/v2';

export async function fetchDeputy(id?: string) {
  if (!id) {
    throw new Error('Deputy ID is required');
  }
  const url = `${API_BASE_URL}/deputados/${id}`;
  
  const response = await fetch(url, {
    headers: {
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch deputy data');
  }

  return response.json();
}

export const useDeputy = (id?: string) => {
  return useQuery<ResponseDeputado, Error>({
    queryKey: ['deputy', id],
    queryFn: () => fetchDeputy(id),
    staleTime: 5000,
    enabled: !!id, // The query will not run until the id is available
  });
};
