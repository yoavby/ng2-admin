import {Component} from '@angular/core';

import {BaAppPicturePipe} from '../../../../../../theme/pipes';
import {FeatureTableService} from '../../featureTable.service';

@Component({
  selector: 'hover-table',
  template: require('./hoverTable.html'),
  pipes: [BaAppPicturePipe]
})
export class HoverTable {

  metricsTableData:Array<any>;
  selectedItem:any;
  constructor(private _basicTablesService: FeatureTableService) {
    this.metricsTableData = _basicTablesService.metricsTableData;
  }

  setSelectItem(item:any){
    console.log(item.browser);
    
    this.selectedItem=item;
  }
}
