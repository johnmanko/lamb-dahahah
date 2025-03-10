import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { routes as lambdaRoutes } from './routes/lambda/lambda.routes';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'lambdas',
    children: lambdaRoutes,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
