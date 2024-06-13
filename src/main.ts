import { Component, isDevMode } from "@angular/core";
import { RouterOutlet, Routes, provideRouter } from "@angular/router";
import { bootstrapApplication } from "@angular/platform-browser";
import "zone.js";
import { CustomContainerComponent } from "./app/custom-container/custom-container.component";
import { provideEffects } from "@ngrx/effects";
import { provideStore, provideState } from "@ngrx/store";
import { reducer } from "./app/custom-container/store/entity-reducer.reducer";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { provideHttpClient } from "@angular/common/http";

////////////////////////////////////////////////////////////////////////////////
import { EntityEffects } from "./app/custom-container/store/entity.effects";
import * as entityFunctionalEffects from "./app/custom-container/store/entity-functional.effects";
import {
  RouterState,
  provideRouterStore,
  routerReducer,
} from "@ngrx/router-store";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  template: ` <router-outlet /> `,
})
export class App {
  name = "Angular";
}

export const appRoutes: Routes = [
  {
    path: "",
    providers: [
      provideState({
        name: "entityReducer",
        reducer: reducer,
      }),
      provideEffects(entityFunctionalEffects),
    ],
    loadComponent: () => CustomContainerComponent,
  },
];

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    provideStore({
      router: routerReducer,
    }),
    //provideEffects([EntityEffects]),
    provideRouter(appRoutes),
    provideRouterStore({
      routerState: RouterState.Minimal,
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
});
