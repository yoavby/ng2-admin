import {Component, ViewEncapsulation} from '@angular/core';

import {FeatureTableService} from './featureTable.service';
import {BaCard} from '../../../../theme/components';
import {HoverTable} from './components/hoverTable';

@Component({
  selector: 'features-table',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard, HoverTable],
  styles: [require('./featureTable.scss')],
  template: require('./featureTable.html'),
  providers: [FeatureTableService]
})
export class FeaturesTable {

  constructor() {
  }
}
