import { Component, inject, Input } from '@angular/core';
import { RandomService } from '../random';

@Component({
  selector: 'app-random',
  standalone: true,
  imports: [],
  templateUrl: './random.html',
  styleUrl: './random.css',
})
export class Random {
  private randomService = inject(RandomService);

  @Input({ required: true }) max!: number;

  value: number = 1;

  roll(): void {
    this.value = this.randomService.getRandom(this.max);
  }

  get halfMax(): number {
    return 0.5 * this.max;
  }

  get isSmall(): boolean {
    return this.value <= this.halfMax;
  }

  get message(): string {
    return this.isSmall
      ? `Dobrze: ${this.value} <= ${this.halfMax}`
      : `Źle: ${this.value} > ${this.halfMax}`;
  }
}
