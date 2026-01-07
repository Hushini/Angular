import { Injectable } from '@angular/core';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private readonly storageKey = 'persons';

  getAll(): Person[] {
    return this.readPersons();
  }

  getByIndex(index: number): Person | null {
    const persons = this.readPersons();
    return index >= 0 && index < persons.length ? persons[index] : null;
  }

  add(person: Person): void {
    const persons = this.readPersons();
    persons.push(person);
    this.savePersons(persons);
  }

  removeByIndex(index: number): void {
    const persons = this.readPersons();
    if (index < 0 || index >= persons.length) return;

    persons.splice(index, 1);
    this.savePersons(persons);
  }

  private readPersons(): Person[] {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (!raw) return [];

      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? (parsed as Person[]) : [];
    } catch {
      return [];
    }
  }

  private savePersons(persons: Person[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(persons));
  }
}
