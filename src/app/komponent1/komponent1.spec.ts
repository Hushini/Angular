import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Komponent1 } from './komponent1';

describe('Komponent1', () => {
  let component: Komponent1;
  let fixture: ComponentFixture<Komponent1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Komponent1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Komponent1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
