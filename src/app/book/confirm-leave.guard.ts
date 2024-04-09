import {CanDeactivateFn} from '@angular/router';
import {BookDetailComponent} from "./book-detail/book-detail.component";

export const confirmLeaveGuard: CanDeactivateFn<BookDetailComponent> = (
    component,
    currentRoute,
    currentState,
    nextState
) => {
  return confirm('Do you really want to leave?');
};
