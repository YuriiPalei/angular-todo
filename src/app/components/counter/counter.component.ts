import { Component, effect, input, signal } from '@angular/core';
import { Button } from '../button/button.component';

@Component({
  selector: 'counter',
  imports: [Button],
  template: `
    <h1>{{ count() }}</h1>
    <app-button [title]="isRunning() ? 'Stop' : 'Start'" (click)="toggleRunning()" />
  `,
  styles: `
    h1 {
      text-align: center;
    }
  `,
})
export class Counter {
  readonly interval = input(1000);
  readonly count = signal(0);
  readonly isRunning = signal(false);

  increment() {
    this.count.update((count) => count + 1);
  }

  toggleRunning() {
    this.isRunning.update((running) => !running);
  }

  constructor() {
    effect((onCleanup) => {
      const interval = setInterval(() => {
        if (!this.isRunning()) {
          return;
        }
        this.increment();
      }, this.interval());

      onCleanup(() => {
        clearInterval(interval);
      });
    });
  }
}
