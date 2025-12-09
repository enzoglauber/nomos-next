'use client';

import { useDeputiesContext } from '../contexts/deputies-context';
import { useDeputies } from '../hooks/use-deputies';
import SubHeader from '../components/subheader';
import DeputiesFilter from '../components/deputies-filter';

import DeputiesList from '../components/deputies-list';

import Pagination from '../components/pagination';

function DeputiesPage() {
  const { page, items, filter, setPage, setItems } = useDeputiesContext();

  const { isError, isLoading, data } = useDeputies(page, filter, items);

  return (
    <div className="container mx-auto max-w-screen-lg px-4 my-24" data-testid="deputies">
      <SubHeader title="Deputados" subtitle="Veja abaixo a lista de deputados" />

      <div className="flex flex-wrap my-12" >
        <DeputiesFilter />
      </div>

      {isLoading ? (
        <div data-testid="deputies-loading">Loading...</div>
      ) : isError ? (
        <div data-testid="deputies-error">Error</div>
      ) : (
        <DeputiesList data={data?.dados} data-testid="deputies-list" />
      )}

      <div className="flex justify-end mt-12">
        <Pagination
          page={page}
          items={items}
          setPage={setPage}
          links={data?.links}
          setItems={setItems}
        />
      </div>
    </div>
  );
}

export default DeputiesPage;
