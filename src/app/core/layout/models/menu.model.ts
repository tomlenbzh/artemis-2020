import { Languages } from './language.model';

export interface MenuItem {
  title?: string;
  route?: string;
  active?: boolean;
  children?: MenuItem[];
  flag?: string;
  language?: Languages;
  languageLabel?: string;
}

export interface Config {
  multi?: boolean;
}
