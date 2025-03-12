import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: ` <button>{{ title() }}</button> `,
  styles: `
    button {
      background-color: midnightblue;
      color: white;
      border-radius: 10px;
      width: 100px;
      height: 40px;
      margin: 10px;
    }
  `,
})
export class Button {
  readonly title = input.required<string>();
}
