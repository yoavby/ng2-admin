import {Component, ViewEncapsulation} from '@angular/core';

import {FeatureTableService} from './featureTable.service';
import {BaCard} from '../../../../theme/components';
import {HoverTable} from './components/hoverTable';
import {CardWithHTMLTitle} from '../cardWithHTMLTitle/cardWithHTMLTitle.component';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
@Component({
  selector: 'features-table',
  encapsulation: ViewEncapsulation.None,
  directives: [DROPDOWN_DIRECTIVES,CardWithHTMLTitle, HoverTable],
  styles: [require('./featureTable.scss')],
  template: require('./featureTable.html'),
  providers: [FeatureTableService]
})
export class FeaturesTable {

  constructor() {
  }
}
