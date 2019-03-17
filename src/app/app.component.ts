import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'angular-example';
  public counter = 0;

  increase() {
    this.counter++;
  }

  reset() {
    this.counter = 0;
  }
}
