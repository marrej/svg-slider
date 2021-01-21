import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  labels = ["25", "50", "75"];
  width = 500;
  getLabelXPosition(i: number): number {
    return (this.width / (this.labels.length + 1)) * (i + 1);
  }
}
