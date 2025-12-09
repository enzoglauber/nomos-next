'use client';

import { SyntheticEvent, useState } from 'react';
import { useDeputiesContext } from '../contexts/deputies-context';
import InputFilter from './input-filter';

export default function DeputiesFilter() {
  const [deputy, setDeputy] = useState('');
  const [party, setParty] = useState('');
  const [uf, setUf] = useState('');

  const { setFilter, setPage } = useDeputiesContext();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    submit();
  };

  const submit = () => {
    setFilter({ deputy, party, uf });
    setPage(1);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} data-testid="deputies-filter" className="flex items-end flex-wrap gap-y-4">
        <InputFilter
          id="deputy"
          value={deputy}
          label="Buscar por Deputado"
          className="w-full sm:w-[17.5rem] mr-0 sm:mr-[1.875rem]"
          onChange={(e) => setDeputy(e.target.value)}
          onClickSearch={handleSubmit}
        />
        <InputFilter
          id="party"
          value={party}
          label="Partido"
          className="w-full sm:w-[11.25rem] mr-0 sm:mr-[1.875rem]"
          onChange={(e) => setParty(e.target.value)}
          onClickSearch={handleSubmit}
        />
        <InputFilter
          id="uf"
          value={uf}
          label="UF"
          className="w-full sm:w-[11.25rem]"
          onChange={(e) => setUf(e.target.value)}
          onClickSearch={handleSubmit}
        />

        <button type="submit" hidden>
          Search
        </button>
      </form>
    </div>
  );
}
