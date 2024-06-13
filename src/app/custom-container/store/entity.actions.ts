import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const EntityActions = createActionGroup({
  source: 'Entity',
  events: {
    'Manage Entitys': emptyProps(),
    'Manage Entitys Success': props<{ data: unknown }>(),
    'Manage Entitys Failure': props<{ error: unknown }>(),
  }
});
