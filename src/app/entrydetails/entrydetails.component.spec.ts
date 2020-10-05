import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrydetailsComponent } from './entrydetails.component';

describe('EntrydetailsComponent', () => {
  let component: EntrydetailsComponent;
  let fixture: ComponentFixture<EntrydetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrydetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
