import {Routes} from "@angular/router";
import {BookComponent} from "./book/book.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {confirmLeaveGuard} from "./confirm-leave.guard";
import {authGuard} from "./auth.guard";
import {BookNewComponent} from "./book-new/book-new.component";

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
    },
    {
        path: 'new',
        component: BookNewComponent,
        canActivate: [authGuard]
    }
]

export default bookRoutes;
