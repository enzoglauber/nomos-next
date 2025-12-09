import { Deputado } from './deputado';
import { Link } from './link';

export interface ResponseDeputado {
  dados: Deputado;
  links: Link[];
}
