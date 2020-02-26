import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ivy-template';
  
  switch_expression = 'monitor';

  setMonitor() {
    this.switch_expression = 'monitor';
    console.log(this.switch_expression);
  }

  setLaptop() {
    this.switch_expression = 'laptop';
    console.log(this.switch_expression);
  }
}
