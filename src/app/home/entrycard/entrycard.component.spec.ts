import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrycardComponent } from './entrycard.component';

describe('EntrycardComponent', () => {
  let component: EntrycardComponent;
  let fixture: ComponentFixture<EntrycardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrycardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
