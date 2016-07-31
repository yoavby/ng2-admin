import {Component, ViewEncapsulation, ViewChild, Input} from '@angular/core';
import {BaCardBlur} from './baCardBlur.directive';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
@Component({
  selector: 'ba-card',
  styles: [require('./baCard.scss')],
  directives: [BaCardBlur,DROPDOWN_DIRECTIVES],
  template: require('./baCard.html'),
  encapsulation: ViewEncapsulation.None
})
export class BaCard {
  @Input() title:String;
  @Input() baCardClass:String;
}
