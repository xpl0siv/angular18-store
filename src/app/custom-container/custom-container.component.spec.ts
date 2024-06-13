import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomContainerComponent } from './custom-container.component';
import { Store, StoreModule } from '@ngrx/store';

describe('CustomContainerComponent', () => {
  let component: CustomContainerComponent;
  let fixture: ComponentFixture<CustomContainerComponent>;
  let store: Store;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ CustomContainerComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
