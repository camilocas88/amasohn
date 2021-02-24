import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMidComponent } from './content-mid.component';

describe('ContentMidComponent', () => {
  let component: ContentMidComponent;
  let fixture: ComponentFixture<ContentMidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentMidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentMidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
