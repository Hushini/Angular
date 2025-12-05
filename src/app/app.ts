import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Random } from './random/random';
import { List } from './list/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Random, List],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularweber');
  tekst: string = 'cos tam cos tam dziala';
}
