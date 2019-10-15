import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular8BasicsComponent } from './angular8-basics.component';

describe('Angular8BasicsComponent', () => {
  let component: Angular8BasicsComponent;
  let fixture: ComponentFixture<Angular8BasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular8BasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular8BasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
