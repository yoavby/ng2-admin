import {Component} from '@angular/core';

import {BaAppPicturePipe} from '../../../../../../theme/pipes';
import {FeatureTableService} from '../../featureTable.service';
import {SubHoverTable} from './subHoverTable';
@Component({
  selector: 'hover-table',
  template: require('./hoverTable.html'),
  pipes: [BaAppPicturePipe],
   directives: [SubHoverTable]
})
export class HoverTable {

  metricsTableData:Array<any>;
  selectedItem:any;
  isOpen:boolean;
  constructor(private _basicTablesService: FeatureTableService) {
    this.metricsTableData = _basicTablesService.metricsTableData;
  }
getRotation(item:any) {
  
  if (this.selectedItem === item){
    console.log("rotate true");
      return true;//"rotate(90deg)"
    }else{
      console.log("rotate false");
      return  false;//"rotate(180deg)"
    }
}
  setSelectItem(item:any){
    console.log(item.browser);
    if(this.selectedItem == null){
      this.isOpen = true;
    }else if (this.selectedItem === item){
      this.isOpen = !this.isOpen;
    }else{
      this.isOpen = true;
    }

    this.selectedItem=item;
  }
}
