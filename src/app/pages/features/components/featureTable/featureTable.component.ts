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
metricsTableData:Array<any>;
products:Array<any>;
seasons:Array<any>;
  constructor(private _basicTablesService: FeatureTableService) {
    this.metricsTableData = _basicTablesService.metricsTableData;
    this.products = _basicTablesService.products;
    this.seasons=_basicTablesService.seasons;
    console.log(this.metricsTableData);
    console.log(this.products);
    console.log(this.seasons);
  }
}
