import { Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {BookNewComponent} from "./book/book-new/book-new.component";
import {authGuard} from "./book/auth.guard";

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/about',
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'books',
        loadChildren: () =>
            import('./book/books.routes'),
    }
];
