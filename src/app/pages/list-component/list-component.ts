import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Person } from '../../models/person';
import { PersonService } from '../../services/person';

@Component({
  selector: 'app-list-component',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list-component.html',
  styleUrl: './list-component.css',
})
export class ListComponent implements OnInit {
  persons: Person[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.reload();
  }

  delete(index: number): void {
    this.personService.removeByIndex(index);
    this.reload();
  }

  private reload(): void {
    this.persons = this.personService.getAll();
  }
}
