import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDemoComponent } from './page-demo.component';

describe('PageDemoComponent', () => {
  let component: PageDemoComponent;
  let fixture: ComponentFixture<PageDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
