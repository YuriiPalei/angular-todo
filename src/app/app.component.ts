import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './components/counter/counter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Counter],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AngularFirst';
}
