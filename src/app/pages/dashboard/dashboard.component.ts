import {Component, ViewEncapsulation} from '@angular/core';

import {PopularApp} from './popularApp';
import {PieChart} from './pieChart';
import {TrafficChart} from './trafficChart';
import {UsersMap} from './usersMap';
import {LineChart} from './lineChart';
import {Feed} from './feed';
import {Todo} from './todo';
import {Calendar} from './calendar';
import {BaCard} from '../../theme/components';

@Component({
  selector: 'dashboard',
  pipes: [],
  directives: [PopularApp, PieChart, TrafficChart, UsersMap, LineChart, Feed, Todo, Calendar, BaCard],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./dashboard.scss')],
  template: `
  <div class="content-top clearfix">
  <h1 class="al-title">Groups</h1> 
</div>
  <router-outlet></router-outlet>`
})
export class Dashboard {

  constructor() {
  }

}
