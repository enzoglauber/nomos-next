import { Deputados } from './deputados';
import { Link } from './link';

export interface ResponseDeputados {
  dados: Deputados[];
  links: Link[];
}
