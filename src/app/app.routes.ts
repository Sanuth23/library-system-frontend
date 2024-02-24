import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ViewBooksComponent } from './pages/view-books/view-books.component';

export const routes: Routes = [
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"view-books",
        component:ViewBooksComponent
    }
];
