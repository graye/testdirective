import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  @Input()
  input;

  @Output()
  outputBack;

  constructor() {
    this.outputBack = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  sendBack() {
    this.outputBack.emit(this.input);
  }

}
