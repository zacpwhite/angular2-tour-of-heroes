import {bootstrap} from 'angular2/angular2';
import {HTTP_BINDINGS} from 'http/http';
import {ROUTER_BINDINGS} from 'angular2/router';
import {HeroService} from './hero-service';
import {ShellComponent} from './shell-component';

bootstrap(ShellComponent, [HTTP_BINDINGS, ROUTER_BINDINGS, HeroService]);
