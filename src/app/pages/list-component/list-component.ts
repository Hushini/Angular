import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { Person } from '../../models/person';
import { PersonService } from '../../services/person';

@Component({
  selector: 'app-list-component',
  standalone: true,
  imports: [RouterLink, MatListModule, MatButtonModule, MatIconModule, MatDividerModule, MatSnackBarModule],
  templateUrl: './list-component.html',
  styleUrl: './list-component.css',
})
export class ListComponent implements OnInit {
  persons: Person[] = [];

  constructor(private personService: PersonService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.reload();
  }

  delete(index: number): void {
    this.personService.removeByIndex(index);
    this.reload();

    this.snackBar.open('Usunięto osobę', 'OK', { duration: 1500, verticalPosition: 'top' });
  }

  private reload(): void {
    this.persons = this.personService.getAll();
  }
}
