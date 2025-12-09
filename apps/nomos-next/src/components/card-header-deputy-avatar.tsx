import Image from 'next/image';
import { Deputado } from '../interfaces/deputado';

export interface CardHeaderDeputyAvatarProps {
  deputy?: Deputado;
}

function CardHeaderDeputyAvatar({ deputy }: CardHeaderDeputyAvatarProps) {
  const period = deputy?.ultimoStatus.data
    ? `${new Date(deputy?.ultimoStatus.data).getFullYear()} - ${
        new Date(deputy?.ultimoStatus.data).getFullYear() + 4
      }`
    : '';

  if (!deputy) {
    return null; // Or a loading skeleton
  }

  return (
    <div
      data-testid="card-header-deputy-avatar"
      className="ml-2 flex flex-col items-center"
    >
      <Image
        alt={deputy.nomeCivil}
        src={deputy.ultimoStatus.urlFoto}
        width={130}
        height={130}
        data-testid="card-header-deputy-avatar-picture"
        className="w-32 h-32 border-4 border-primary rounded-full mb-1"
      />
      <p className="text-sm text-primary mb-2">
        Deputado Federal
      </p>
      <h3
        className="text-base font-semibold text-secondary mb-2"
        data-testid="card-header-deputy-avatar-name"
      >
        {deputy.ultimoStatus.nome}
      </h3>
      <p
        className="text-base text-secondary mb-2"
        data-testid="card-header-deputy-avatar-party"
      >
        Partido: {deputy.ultimoStatus.siglaPartido}
      </p>
      <p
        className="text-sm text-text-primary uppercase"
      >
        {`${deputy.ultimoStatus.condicaoEleitoral} em ${deputy.ultimoStatus.situacao} `}
        <span data-testid="card-header-deputy-avatar-period">{`${period}`}</span>
      </p>
    </div>
  );
}

export default CardHeaderDeputyAvatar;
