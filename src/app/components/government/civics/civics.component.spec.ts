import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivicsComponent } from './civics.component';

describe('CivicsComponent', () => {
  let component: CivicsComponent;
  let fixture: ComponentFixture<CivicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
