import {Pipe} from 'angular2/angular2';
import {Hero} from './hero';

@Pipe({ name: 'sortHeroes' })
export class SortHeroesPipe {
  transform(value: Array<Hero>) {
    if (!value || !value.sort) { return value; }

    return value.sort((a: Hero, b: Hero) => {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    });
  }
}