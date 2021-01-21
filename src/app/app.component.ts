import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  labels = ["25", "50", "75"];
  getLabelXPosition(i: number): number {
    return (this.getTotalWidth() / (this.labels.length + 1)) * (i + 1);
  }

  public getTotalWidth(): number {
    const slider = document.querySelector("#wrapper");
    if (slider) {
      return slider.clientWidth;
    } else {
      return 0;
    }
  }
}
