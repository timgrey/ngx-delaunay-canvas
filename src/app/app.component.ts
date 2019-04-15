import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('canvasEl') canvasEl: ElementRef;

  /** Canvas 2d context */
  private ctx: CanvasRenderingContext2D;

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.ctx = (this.canvasEl.nativeElement as HTMLCanvasElement).getContext('2d');
    this.canvasEl.nativeElement.width = 500
    this.canvasEl.nativeElement.height = 500

    this.draw();
  }

  private draw() {
    this.ctx.fillStyle = 'green';
    
    const x = this.canvasEl.nativeElement.width / 2;
    const y = this.canvasEl.nativeElement.height / 2;

    this.ctx.fillRect(x, y, 50, 50);
  }


}
