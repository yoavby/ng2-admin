import {Component,Input} from '@angular/core';

import {BaAppPicturePipe} from '../../../../../../../theme/pipes';

@Component({
  selector: 'sub-hover-table',
  template: require('./subHoverTable.html'),
  pipes: [BaAppPicturePipe],
  directives: [SubHoverTable]
})
export class SubHoverTable {

  @Input() metricsTableData:Array<any>;
  selectedItem:any;

  setSelectItem(item:any){
    console.log(item.browser);
    
    this.selectedItem=item;
  }
}
