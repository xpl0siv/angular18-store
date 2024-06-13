import { Component, OnInit, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { EntityActions } from "./store/entity.actions";
import { selectEntityData, selectEntityState } from "./store/entity.selectors";
import { AsyncPipe, JsonPipe } from "@angular/common";
import { EntityService } from "./data-access/entity.service";
import { Observable } from "rxjs/internal/Observable";
import { Entity } from "./data-access/entity.interface";
import { tap } from "rxjs/internal/operators/tap";
import { map } from "rxjs/internal/operators/map";

@Component({
  selector: "app-custom-container",
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: "./custom-container.component.html",
  styleUrl: "./custom-container.component.css",
})
export class CustomContainerComponent implements OnInit {
  /**
   *
   */
  readonly #store: Store = inject(Store);

  entity$ = this.#store.select(selectEntityData);
  error$ = this.#store
    .select(selectEntityState)
    .pipe(map((state) => state.error));

  // #entityService: EntityService = inject(EntityService);

  /*
  entities$: Observable<Entity[]> = this.#entityService.getAll().pipe(
    tap((data) => {
      this.#store.dispatch(EntityActions.manageEntitysSuccess({ data }));
    }),
    map((data) => data.slice(0, 3))
  );
  */

  ngOnInit(): void {
    console.log(this.#store);
    this.#store.dispatch(EntityActions.manageEntitys());
  }
  /**
   *
   */
  example() {
    console.log("dispatching...");
  }
}
