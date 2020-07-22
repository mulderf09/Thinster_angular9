import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  bestMovieEver: boolean = true;
  worseMovieEver: boolean = false;

  selectedIndex: number = -1;

  onVoteClick(index) {
    if(this.isSelected(index)){
      this.selectedIndex = -1;
    } else {
      this.selectedIndex = index;
    }
  }

  isSelected(index) {
    return this.selectedIndex === index;
  }

  getButtonText(index) {
    if(this.isSelected(index)){
      return "Unvote";
    } else {
      return "Vote";
    }
  }

  anySelected() {
    return this.selectedIndex !== -1;
  }
}
