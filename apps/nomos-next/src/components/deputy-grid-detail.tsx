import { Deputados } from '../interfaces/deputados';

export interface DeputyGridDetailProps {
  deputy: Deputados;
}

function DeputyGridDetail({ deputy }: DeputyGridDetailProps) {
  return (
    <div className="flex flex-col" data-testid="deputy-grid-detail">
      <div className="mb-2">
        <h3
          className="text-base font-semibold text-secondary inline"
          data-testid="deputy-grid-detail-name"
        >
          {deputy.nome}
        </h3>
        <p className="text-sm text-primary ml-3 inline">
          Deputado Federal
        </p>
      </div>
      <div>
        <span>
          <b className="text-sm font-medium text-text-primary">
            Partido:
          </b>
          <span
            className="text-sm text-primary mr-3"
            data-testid="deputy-grid-detail-party"
          >
            {' '}
            {deputy.siglaPartido}
          </span>
        </span>
        <span>
          <b className="text-sm font-medium text-text-primary">
            UF:
          </b>
          <span
            className="text-sm text-primary mr-3"
            data-testid="deputy-grid-detail-uf"
          >
            {' '}
            {deputy.siglaUf}
          </span>
        </span>
        <span className="text-xs border border-primary text-primary rounded-full px-2 py-0.5">
          Em exercício
        </span>
      </div>
    </div>
  );
}

export default DeputyGridDetail;
