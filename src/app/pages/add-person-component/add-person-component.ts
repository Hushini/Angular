import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { Person } from '../../models/person';
import { PersonService } from '../../services/person';

@Component({
  selector: 'app-add-person-component',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule],
  templateUrl: './add-person-component.html',
  styleUrl: './add-person-component.css',
})
export class AddPersonComponent {
  person: Person = { address: {} };

  constructor(
    private personService: PersonService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  save(): void {
    this.personService.add(this.person);

    this.snackBar.open('Zapisano osobę', 'OK', {
      duration: 2000,
      verticalPosition: 'top',
    });

    this.router.navigateByUrl('/');
  }
}
