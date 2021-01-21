import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  labels: string[] = ["25", "50", "75"];
  thumbPosition: number = 0.3;
  isDragStarted: boolean = false;

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

  public getThumbPosition(): number {
    return this.thumbPosition * this.getTotalWidth();
  }

  public getLineWidth(): string {
    return this.getThumbPosition() + 'px';
  }

  private updateThumbPosition(position: number): void {
    this.thumbPosition = position/this.getTotalWidth();
  }

  @HostListener('mousedown', ['$event'])
  public onMouseDown(event: any): void {
    this.isDragStarted = true;
    this.updateThumbPosition(event.offsetX);
  }
}
