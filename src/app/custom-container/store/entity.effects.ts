import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { EntityService } from "../data-access/entity.service";
import { EntityActions } from "./entity.actions";
import { map } from "rxjs/internal/operators/map";
import { catchError } from "rxjs/internal/operators/catchError";
import { of } from "rxjs/internal/observable/of";
import { exhaustMap } from "rxjs/internal/operators/exhaustMap";

@Injectable()
export class EntityEffects {
  actions$ = inject(Actions);
  #entityService = inject(EntityService);

  manageEntitys$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EntityActions.manageEntitys),
      exhaustMap(() =>
        this.#entityService.getAll().pipe(
          map((data) => EntityActions.manageEntitysSuccess({ data })),
          catchError((error) =>
            of(EntityActions.manageEntitysFailure({ error }))
          )
        )
      )
    )
  );
}

/*
exhaustMap: 

This operator is used when you want to ignore all incoming values from the source 
Observable until the current inner Observable has completed2. 
It’s useful when you want to ensure one task is exhausted before moving 
to the next2.

For example,
if you’re making HTTP requests and you want to wait until the current request 
has finished before starting the next one, exhaustMap would be a good choice3.

switchMap: 

This operator is used when you want to cancel the current inner Observable 
and start a new one as soon as a new value arrives from the source Observable1.
It’s often used with HTTP GET calls1. 

For example, 
if you’re fetching data based on user input and the user input changes, 
you might want to cancel the current fetch operation and start 
a new one with the updated input. In this case, switchMap would be a good choice1.
*/
