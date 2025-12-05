import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Komponent2 } from './komponent2';

describe('Komponent2', () => {
  let component: Komponent2;
  let fixture: ComponentFixture<Komponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Komponent2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Komponent2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
