import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameelementoComponent } from './gameelemento.component';

describe('GameelementoComponent', () => {
  let component: GameelementoComponent;
  let fixture: ComponentFixture<GameelementoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameelementoComponent]
    });
    fixture = TestBed.createComponent(GameelementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
