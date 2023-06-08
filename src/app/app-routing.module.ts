import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./screens/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'create-account',
    loadChildren: () => import('./screens/createAccount/create-account.module').then( m => m.CreateAccountPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./screens/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'bug-report',
    loadChildren: () => import('./screens/bug-report/bug-report.module').then( m => m.BugReportPageModule)
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./screens/restaurants/restaurants.module').then( m => m.RestaurantsPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./screens/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'foods/:id',
    loadChildren: () => import('./screens/foods/foods.module').then(m => m.FoodsPageModule)
  },
  {
    path: 'localizacao',
    loadChildren: () => import('./screens/localizacao/localizacao.module').then( m => m.LocalizacaoPageModule)
  },
  {
    path: 'entrega',
    loadChildren: () => import('./screens/entrega/entrega.module').then( m => m.EntregaPageModule)
  },
  {
    path: 'avaliacao',
    loadChildren: () => import('./screens/avaliacao/avaliacao.module').then( m => m.AvaliacaoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
