import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { EntityActions } from './store/entity.actions';

@Component({
  selector: 'app-custom-container',
  standalone: true,
  imports: [],
  templateUrl: './custom-container.component.html',
  styleUrl: './custom-container.component.css',
})
export class CustomContainerComponent {
  /**
   *
   */
  readonly #store: Store = inject(Store);
  /**
   *
   */
  example() {
    console.log('dispatching...');
    this.#store.dispatch(EntityActions.manageEntitys());
  }
}
