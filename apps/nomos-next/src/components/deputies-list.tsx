'use client';

import Link from 'next/link';
import { Deputados } from '../interfaces/deputados';
import DeputyGridAvatar from './deputy-grid-avatar';
import DeputyGridDetail from './deputy-grid-detail';

export interface DeputiesListProps {
  data?: Deputados[];
}

const NorthEastIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
  </svg>
);


function DeputiesList({ data }: DeputiesListProps) {
  return (
    <div className="flex flex-col gap-4" data-testid="deputy-list">
      {data?.map((deputy) => (
        <div key={deputy.id} className="bg-background-paper p-4 rounded-lg border border-divider" data-testid="deputy-list-item">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <DeputyGridAvatar deputy={deputy} data-testid="deputy-list-item-avatar" />
            </div>
            <div className="w-1/2 flex-grow">
              <DeputyGridDetail deputy={deputy} data-testid="deputy-list-item-detail" />
            </div>
            <div className="flex-shrink-0 ml-auto">
              <Link
                href={`/deputados/${deputy.id}`}
                className="bg-primary text-white px-3 py-2 text-sm rounded-md flex items-center hover:bg-primary/90"
                data-testid="deputy-list-item-link"
              >
                Detalhes
                <NorthEastIcon />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DeputiesList;
