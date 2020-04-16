import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {LoginGuard} from '../guard/login.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'cart',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../cart/cart/cart.module').then(m => m.CartPageModule),
              canActivate: [LoginGuard]
          }
        ]
      },
      {
        path: 'mine',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../mine/mine/mine.module').then(m => m.MinePageModule),
            canActivate: [LoginGuard]
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
