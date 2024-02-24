import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ViewBooksComponent } from './pages/view-books/view-books.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"view-books",
        component:ViewBooksComponent
    },
    {
        path:"sign-up",
        component:RegisterComponent
    }
];
