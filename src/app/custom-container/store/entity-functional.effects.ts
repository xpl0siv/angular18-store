import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EntityService } from "../data-access/entity.service";
import { EntityActions } from "./entity.actions";
import { exhaustMap } from "rxjs/internal/operators/exhaustMap";
import { map } from "rxjs/internal/operators/map";
import { catchError } from "rxjs/internal/operators/catchError";
import { of } from "rxjs/internal/observable/of";

export const entityFunctionalEffects = createEffect(
  (actions$ = inject(Actions), entityService = inject(EntityService)) => {
    return actions$.pipe(
      ofType(EntityActions.manageEntitys),
      exhaustMap(() =>
        entityService.getAll().pipe(
          map((data) => EntityActions.manageEntitysSuccess({ data })),
          catchError((error) =>
            of(EntityActions.manageEntitysFailure({ error }))
          )
        )
      )
    );
  },
  {
    functional: true,
  }
);
