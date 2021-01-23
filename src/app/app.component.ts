import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  labels: string[] = ["25", "50", "75"];
  thumbPosition: number = 0.3;
  isDragStarted: boolean = false;
  svgElement: any;

  public ngOnInit(): void {
    this.svgElement = document.querySelector("#wrapper");
  }

  getLabelXPosition(i: number): number {
    return (this.getTotalWidth() / (this.labels.length + 1)) * (i + 1);
  }

  public getTotalWidth(): number {
    const slider = this.svgElement;
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
    event.stopPropagation();
    event.preventDefault();
  }

  @HostListener('mousemove', ['$event'])
  public onMouseMove(event: any): void {
    if (this.isDragStarted) {
      this.updateThumbPosition(event.offsetX);
      event.stopPropagation();
      event.preventDefault();
    }
  }

  @HostListener('mouseup')
  public onMouseUp(): void {
    this.isDragStarted = false;
  }

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    this.isDragStarted = false;
  }

  @HostListener('touchmove', ['$event'])
  public onTouchMove(event: any): void {
    this.updateThumbPosition(event.touches[0].clientX - this.svgElement.getBoundingClientRect().left)
  }

  @HostListener('dragstart', ['$event'])
  public onDragStart(event: any): void {
    event.stopPropagation();
    event.preventDefault();
  }

}
