import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'show-data',
    loadComponent: () => import('../components/show-data/show-data').then(m => m.ShowData)
  }

];
