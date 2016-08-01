import {Component} from '@angular/core';

@Component({
  selector: 'editors',
  template: `
    <div class="content-top clearfix">
  <h1 class="al-title">Settings</h1> 
</div>
  <router-outlet></router-outlet>`
})
export class Editors {
  constructor() {
  }
}
