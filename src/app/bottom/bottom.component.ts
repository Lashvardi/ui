import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrl: './bottom.component.css',
})
export class BottomComponent {
  sidebarVisible4: boolean = false;

  makeSidebarVisible4() {
    this.sidebarVisible4 = true;
  }
}
