import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'mine',
    loadChildren: () => import('./mine/mine/mine.module').then( m => m.MinePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
