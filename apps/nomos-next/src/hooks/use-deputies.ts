import { useQuery } from '@tanstack/react-query';
import { DeputiesFilter } from '../interfaces/deputies-filter';
import { ResponseDeputados } from '../interfaces/response-deputados';

const API_BASE_URL = 'https://dadosabertos.camara.leg.br/api/v2';

export async function fetchDeputies(page = 1, items: string, filter?: DeputiesFilter) {
  const params = new URLSearchParams({
    pagina: String(page),
    itens: items,
    ordem: 'ASC',
    ordenarPor: 'nome',
  });

  if (filter?.deputy) {
    params.append('nome', filter.deputy);
  }
  if (filter?.party) {
    params.append('siglaPartido', filter.party);
  }
  if (filter?.uf) {
    params.append('siglaUf', filter.uf);
  }

  const url = `${API_BASE_URL}/deputados?${params.toString()}`;
  
  const response = await fetch(url, {
    headers: {
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch deputies');
  }

  return response.json();
}

export const useDeputies = (
  page: number = 1,
  filter: DeputiesFilter = { party: '', deputy: '', uf: '' },
  items: string = '10'
) => {
  return useQuery<ResponseDeputados, Error>({
    queryKey: ['deputies', page, items, filter],
    queryFn: () => fetchDeputies(page, items, filter),
    staleTime: 5000,
  });
};
