'use client';

import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDeputiesContext } from '../contexts/deputies-context';
import { Link } from '../interfaces/link';

export interface PaginationProps extends Pick<ReturnType<typeof useDeputiesContext>, 'page' | 'items' | 'setPage' | 'setItems'> {
  links?: Link[];
}

function Pagination({ page, items, links, setPage, setItems }: PaginationProps) {
  const [count, setCount] = useState(1);
  const counters = Array.from({ length: 10 }, (_, i) => String(i + 1));

  const handleChangeItems = (event: ChangeEvent<HTMLSelectElement>) => {
    setPage(1);
    setItems(event.target.value);
  };

  useEffect(() => {
    const last = links?.find((link) => link.rel === 'last');
    if (last) {
      try {
        const params = new URLSearchParams(new URL(last.href).search);
        const lastPage = parseInt(params.get('pagina') || '1', 10);
        setCount(lastPage);
      } catch (error) {
        console.error("Invalid URL in pagination links", error);
        setCount(page);
      }
    } else if (links?.length) {
        let maxPage = 0;
        links.forEach(link => {
            try {
                const params = new URLSearchParams(new URL(link.href).search);
                const pageNum = parseInt(params.get('pagina') || '0', 10);
                if (pageNum > maxPage) maxPage = pageNum;
            } catch (e) { /* ignore invalid urls */ }
        });
        if (maxPage > page) setCount(maxPage);
        else setCount(page);
    } else if (page > count) {
        setCount(page);
    }
  }, [links, page, count]);

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < count) {
      setPage(page + 1);
    }
  };


  return (
    <div className="flex items-center gap-8 flex-wrap" data-testid="pagination">
      <div className="flex items-center gap-2">
        <label htmlFor="items-per-page" className="text-sm text-text-primary">
          Itens por página:
        </label>
        <select
          id="items-per-page"
          value={items}
          onChange={handleChangeItems}
          className="bg-background-paper border border-divider rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-primary focus:border-primary"
          data-testid="pagination-select"
        >
          {counters.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center gap-4">
          <button onClick={handlePrev} disabled={page <= 1} className="px-3 py-1 border border-divider rounded-md disabled:opacity-50 disabled:cursor-not-allowed">
            Anterior
          </button>
          <span className="text-sm">
            Página {page} de {count}
          </span>
          <button onClick={handleNext} disabled={page >= count} className="px-3 py-1 border border-divider rounded-md disabled:opacity-50 disabled:cursor-not-allowed">
            Próxima
          </button>
      </div>
    </div>
  );
}

export default React.memo(Pagination);
