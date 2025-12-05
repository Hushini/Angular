import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RandomService {
  public getRandom(max: number): number {
    const m = Math.floor(max);

    if (!Number.isFinite(m) || m < 1) {
      throw new Error('max musi być liczbą >= 1');
    }

    return Math.floor(Math.random() * m) + 1;
  }
}
