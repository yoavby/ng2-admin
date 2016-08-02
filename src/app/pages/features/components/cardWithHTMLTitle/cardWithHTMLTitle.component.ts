import {Component, ViewEncapsulation, ViewChild, Input} from '@angular/core';
import {BaCardBlur} from '../../../..//theme/components/baCard/baCardBlur.directive';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
@Component({
  selector: 'cardWithHTMLTitle',
  styles: [require('./cardWithHTMLTitle.scss')],
  directives: [BaCardBlur,DROPDOWN_DIRECTIVES],
  template: require('./cardWithHTMLTitle.html'),
  encapsulation: ViewEncapsulation.None
})
export class CardWithHTMLTitle {
  @Input() title:String;
  @Input() baCardClass:String;
}
