import Image from 'next/image';
import { Deputados } from '../interfaces/deputados';

export interface DeputyGridAvatarProps {
  deputy: Deputados;
}

function DeputyGridAvatar({ deputy }: DeputyGridAvatarProps) {
  return (
    <Image
      alt={deputy.nome}
      src={deputy.urlFoto}
      width={56}
      height={56}
      className="rounded-full border border-primary"
      data-testid="deputy-grid-avatar"
    />
  );
}

export default DeputyGridAvatar;
