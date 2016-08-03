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
selectedProduct:String;
selectedSeason:String;
  constructor(private _basicTablesService: FeatureTableService) {
    this.metricsTableData = _basicTablesService.metricsTableData;
    this.products = _basicTablesService.products;
    this.selectedProduct = this.products[0];
    this.seasons=_basicTablesService.seasons;
    this.selectedSeason=this.seasons[0];
    console.log(this.metricsTableData);
    console.log(this.products);
    console.log(this.seasons);
  }
  selectProduct(item:any){
    this.selectedProduct=item;
  }
  selectSeason(item:any){
    this.selectedSeason=item;
  }
}
