import {Component,Input} from '@angular/core';

import {BaAppPicturePipe} from '../../../../../../../theme/pipes';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
@Component({
  selector: 'sub-hover-table',
  template: require('./subHoverTable.html'),
  pipes: [BaAppPicturePipe],
  directives: [SubHoverTable,DROPDOWN_DIRECTIVES]
})
export class SubHoverTable {

  @Input() metricsTableData:Array<any>;
  selectedItem:any;
  isOpen:boolean;
getRotation(item:any) {
  if(this.selectedItem == null && this.metricsTableData.length == 1){
    this.setSelectItem(item);
    return true;
  }
  if (this.selectedItem === item && this.isOpen == true){
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
