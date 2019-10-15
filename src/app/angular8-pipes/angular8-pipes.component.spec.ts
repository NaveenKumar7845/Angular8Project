import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular8PipesComponent } from './angular8-pipes.component';

describe('Angular8PipesComponent', () => {
  let component: Angular8PipesComponent;
  let fixture: ComponentFixture<Angular8PipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular8PipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular8PipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
