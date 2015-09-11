// import {HEROES} from './mock-heroes';
import {Http} from 'http/http';
import {Hero} from 'hero';
import {Injectable} from 'angular2/angular2';

@Injectable()
export class HeroService {
	constructor(private _http: Http) {}

	// getAllHeroes() : Observable {
	// 	return this._http.get('app/heroes.json');
	// }

	getAllHeroes(): Promise<Hero[]> {
		return this._http.get('app/heroes.json')
			.toRx().map((response: any) => response.json()).toPromise();
	}

	getHero(id: number) {
		return this.getAllHeroes().then((heroes) => { return heroes.filter((h) => {
			return h.id === id;
		})[0]});
	}

	// getHero(id: number) {
	// 	return getAllHeroes().then((heroes) => { return heroes.filter((h) => {
	// 			return h.id === id;
	// 		})[0]});
	// }

	// getAllHeroes() { return Promise.resolve(HEROES); }

	// getHero(id: number) {
	// 	return Promise.resolve(HEROES)
	// 		.then((heroes) => { return heroes.filter((h) => {
	// 			return h.id === id;
	// 		})[0]});
	// }
}
