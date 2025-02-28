import { signal } from '@angular/core';
import { of } from 'rxjs';

const actualModule = jest.requireActual('@ngrx/store');
export const Store = jest.fn(() => ({
  selectSignal: jest.fn(() => signal({})),
  dispatch: jest.fn(),
  select: jest.fn(() => of({})),
}));
export const createSelector = actualModule.createSelector;
export const createActionGroup = actualModule.createActionGroup;
export const emptyProps = actualModule.emptyProps;
export const props = actualModule.props;
export const createAction = actualModule.createAction;
export const createReducer = actualModule.createReducer;
export const on = actualModule.on;
