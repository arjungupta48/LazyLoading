import { Component, OnInit, ViewChild, Renderer, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-native-element',
  templateUrl: './native-element.component.html',
  styleUrls: ['./native-element.component.css']
})
export class NativeElementComponent implements OnInit {
  
  @ViewChild('para1') p1;
  @ViewChild('input1') input1;

  constructor(private renderer: Renderer) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // setting the color og paragraph
    this.renderer.setElementStyle(
      this.p1.nativeElement, 'color', 'blue'
    );

    // setting the focus for textbox
    this.renderer.invokeElementMethod(
      this.input1.nativeElement, 
      "focus"
    );
  }

}
