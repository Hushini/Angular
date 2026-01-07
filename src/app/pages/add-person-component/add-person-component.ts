import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Person } from '../../models/person';
import { PersonService } from '../../services/person';

@Component({
  selector: 'app-add-person-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-person-component.html',
  styleUrl: './add-person-component.css',
})
export class AddPersonComponent {
  person: Person = {
    address: {},
  };

  constructor(
    private personService: PersonService,
    private router: Router
  ) {}

  save(): void {
    this.personService.add(this.person);
    this.router.navigateByUrl('/');
  }
}
