import { ChangeDetectorRef, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  labels = ["25", "50", "75"];

  constructor(
    private changeDetector: ChangeDetectorRef
  ) {}

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

  @HostListener("window:resize")
  public onScreenResize(): void {
    this.changeDetector.detectChanges();
  }
}
