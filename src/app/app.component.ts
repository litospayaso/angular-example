import { Component } from '@angular/core';

/**
 * Main component of the app.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * Var to hanlde title of the app
   */
  public title = 'angular-example';
  /**
   * Var to handle counter value
   */
  public counter = 0;

  /**
   * Function to handle click on increase button
   */
  increase() {
    this.counter++;
  }

  /**
   * Function to handle reset on counter.
   */
  reset() {
    this.counter = 0;
  }
}
