import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  text: string = '';
  items: string[] = [];

  add(): void {
    const value = this.text.trim();
    if (!value) return;

    this.items.push(value);
    this.text = '';
  }

  remove(index: number): void {
    if (index < 0 || index >= this.items.length) return;
    this.items.splice(index, 1);
  }
}
