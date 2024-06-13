import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Entity } from "../data-access/entity.interface";

export const EntityActions = createActionGroup({
  source: "Entity",
  events: {
    "Manage Entitys": emptyProps(),
    "Manage Entitys Success": props<{ data: Entity[] }>(),
    "Manage Entitys Failure": props<{ error: unknown }>(),
  },
});
