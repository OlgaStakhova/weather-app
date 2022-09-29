import { createAction } from "@reduxjs/toolkit";
import { Weather } from "../../types/Weather";

enum typeAction {
    ADD = 'add/weather',
    DELETE = 'delete/weather',
}

export const addAction = createAction<Weather, typeAction.ADD >(typeAction.ADD);

export const deleteAction = createAction<null, typeAction.DELETE>(typeAction.DELETE);
