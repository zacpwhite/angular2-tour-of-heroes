import {Component, View} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {HeroService} from './hero-service';
import {Hero} from './hero';
import {Routes} from './route-config';
import {HERO_DIRECTIVES} from './hero-directives';
import {InitCapsPipe} from './init-caps-pipe'
import {FilterTextComponent} from './filter-text-component';
import {FilterService} from './filter-service';

@Component({ selector: 'my-heroes' })
@View({
  templateUrl: 'app/heroes-component.html',
  directives: [HERO_DIRECTIVES, FilterTextComponent],
  styleUrls: ['app/heroes-component.css'],
  pipes: [InitCapsPipe]
})
export class HeroesComponent {
  public filteredHeroes: Hero[];
  private _heroes: Hero[];
  public currentHero: Hero;
  public filterText = '';

  heroesAsync: Promise<string>;

  constructor(private _filterService: FilterService, private _heroService: HeroService, private _router: Router) {
    this.filteredHeroes = this._heroes;
    this.heroesAsync = new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve('heroes from promise');
      }, 300)
    });
  }

  get heroes() {
    if (this._heroes) { return this._heroes; }

    this._heroService.getHeroes().then(heroes => this._heroes = this.filteredHeroes = heroes);
    return this._heroes;
  }

  getSelectedClass(hero: Hero) {
    return { 'selected': hero === this.currentHero };
  }

  goDetail() {
    this._router.navigate(`${Routes.detail.as}/${this.currentHero.id}`);
  }

  onSelect(hero: Hero) { this.currentHero = hero; }

  filterChanged(data: string) {
    this.filteredHeroes = this._filterService.filter(data, ['id', 'name'], this._heroes);
  }
}
