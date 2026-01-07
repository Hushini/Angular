import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Person } from '../../models/person';
import { PersonService } from '../../services/person';

@Component({
  selector: 'app-details-component',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './details-component.html',
  styleUrl: './details-component.css',
})
export class DetailsComponent {
  id: number | null = null;
  person: Person | null = null;

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService
  ) {
    this.route.paramMap.subscribe((params) => {
      const idStr = params.get('id');
      const parsed = idStr !== null ? Number(idStr) : NaN;

      if (Number.isNaN(parsed)) {
        this.id = null;
        this.person = null;
        return;
      }

      this.id = parsed;
      this.person = this.personService.getByIndex(this.id);
    });
  }
}
