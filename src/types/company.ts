import { PageData } from './page';
import { Information } from './information';
import { Image } from './image';

export type CompanyData = {
  page: PageData;
  informations: Information[];
  images: Image[];
};
