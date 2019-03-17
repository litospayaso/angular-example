import { Component, OnInit } from '@angular/core';

/**
 * Component to handle toolbar
 */
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  /**
   * @ignore
   */
  constructor() { }

  /**
   * @ignore
   */
  ngOnInit() {
  }

  /**
   * Function to handle go to github button
   */
  goToGithub() {
    window.location.href = 'https://github.com/litospayaso';
  }
}
