import { Component } from '@angular/core';
import { RouterOutlet, Routes, provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { CustomContainerComponent } from './app/custom-container/custom-container.component';
import { provideEffects } from '@ngrx/effects';
import { provideStore, provideState } from '@ngrx/store';
import { reducer } from './app/custom-container/store/entity-reducer.reducer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet />
  `,
})
export class App {
  name = 'Angular';
}

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () => CustomContainerComponent,
  },
];

bootstrapApplication(App, {
  providers: [
    provideStore(),
    provideState({
      name: 'entity',
      reducer: reducer,
    }),
    provideEffects([]),
    provideRouter(appRoutes),
  ],
});
