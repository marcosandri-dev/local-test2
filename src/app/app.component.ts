import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Local-test 2';

  circle = false;

  bubble(event) {
  	console.log("position x: " + event.x);
  	console.log("position y: " + event.y);
  	this.circle = true;
  }



}
