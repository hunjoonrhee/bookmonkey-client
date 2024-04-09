import {Routes} from "@angular/router";
import {BookComponent} from "./book/book.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {confirmLeaveGuard} from "./confirm-leave.guard";
import {authGuard} from "./auth.guard";

const bookRoutes: Routes = [
    {
        path: '',
        component: BookComponent,
        canActivate: [authGuard]
    },
    {
        path: 'detail/:isbn',
        component: BookDetailComponent,
        canDeactivate: [confirmLeaveGuard]
    }
]

export default bookRoutes;
