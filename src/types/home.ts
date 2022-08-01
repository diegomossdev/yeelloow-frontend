import { SliderData } from './slider';
import { TextAndImageData } from './textandimages';
import { Event } from './events';
import { Information } from './information';
import { Testimonial } from './testimonial';
import { PageData } from './page';

export type HomeData = {
  page: PageData;
  sliders: SliderData[];
  textandimages: TextAndImageData[];
  events: Event[];
  informations: Information[];
  testimonials: Testimonial[];
};
