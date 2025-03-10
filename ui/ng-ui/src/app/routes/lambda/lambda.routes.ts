import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { LambdaComponent } from './lambda.component';

export const routes: Routes = [
  {
    path: '',
    component: LambdaComponent,
    children: [
      {
        path: '',
        redirectTo: 'hello',
        pathMatch: 'full',
      },
      {
        path: 'hello',
        data: { menu: true, label: 'Hello, World!', icon: 'fa-solid fa-comment' },
        component: HelloComponent,
      },
      {
        path: 'logread',
        data: { menu: true, label: 'CloudWatch Filtered Log', icon: 'fa-solid fa-binoculars' },
        loadComponent: () =>
          import('./logread/logread.component').then((m) => m.LogreadComponent),
      },
      {
        path: 'bucket-browse',
        data: { menu: true, label: 'Bucket Browse', icon: 'fa-regular fa-folder-open' },
        loadComponent: () =>
          import('./bucket-browse/bucket-browse.component').then((m) => m.BucketBrowseComponent),
      },
    ]
  },
];
