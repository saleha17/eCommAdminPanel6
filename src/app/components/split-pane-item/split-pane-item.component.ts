import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-split-pane-item',
  templateUrl: './split-pane-item.component.html',
  styleUrls: ['./split-pane-item.component.scss'],
})
export class SplitPaneItemComponent implements OnInit {
  ArrayValue = [];

  get val(): any {
    return this.ArrayValue;
  }

  @Input()
  set val(name: any) {
    this.ArrayValue = name;
    this.FixedArray = name;
  }

  @Input() StingName: any;
  @Input() functionName: any;
  @Input() dyClass: any;
  @Output() callFunction: EventEmitter<any> = new EventEmitter();
  @Output() callIonInput: EventEmitter<any> = new EventEmitter();
  @Output() callKeydown: EventEmitter<any> = new EventEmitter();
  @Output() callKeyupEnter: EventEmitter<any> = new EventEmitter();
  arrowKeyLocation = -1;
  FixedArray = [];

  constructor() {}

  ngOnInit() {}
  call(process, index) {
    this.arrowKeyLocation = index;
    this.callFunction.emit(process);
  }
  inputCall(process) {
    if (this.callIonInput.observers.length == 1) {
      this.callIonInput.emit(process);
    } else {
      if (!!process.detail.value && process.detail.value != '') {
        let StingName = this.StingName;
        let ArrayNew = [];

        this.FixedArray.forEach((item) => {
          item[StingName].toLowerCase().indexOf(
            process.detail.value.toLowerCase()
          ) != -1
            ? ArrayNew.push(item)
            : '';
        });
        this.ArrayValue = ArrayNew;
      } else {
        this.ArrayValue = this.FixedArray;
      }
    }
  }
  keyDownCall(process) {
    switch (process.keyCode) {
      case 38: // this is the ascii of arrow up
        if (
          this.ArrayValue &&
          this.ArrayValue.length > 0 &&
          this.arrowKeyLocation != 0
        ) {
          this.arrowKeyLocation--;
        }
        break;
      case 40: // this is the ascii of arrow down
        if (
          this.ArrayValue &&
          this.ArrayValue.length > 0 &&
          this.ArrayValue.length != this.arrowKeyLocation + 1
        ) {
          this.arrowKeyLocation++;
        }
        break;
      case 13: // this is the ascii of Enter
        this.call(
          this.ArrayValue[this.arrowKeyLocation],
          this.arrowKeyLocation
        );
        break;
      default:
        // console.log(process.keyCode);
        break;
    }
    this.callKeydown.emit(process);
  }
  KeyUpEnter() {
    this.callKeyupEnter.emit();
  }
}
