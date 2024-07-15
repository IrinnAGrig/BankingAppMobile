import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full' },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module')
      .then(m => m.SignInModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module')
      .then(m => m.IntroModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module')
      .then(m => m.ProfileModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module')
      .then(m => m.EditProfileModule)
  },
  {
    path: 'add-card',
    loadChildren: () => import('./pages/add-card/add-card.module')
      .then(m => m.AddCardModule)
  },
  {
    path: 'all-cards',
    loadChildren: () => import('./pages/all-cards/all-cards.module')
      .then(m => m.AllCardsModule)
  },
  {
    path: '',
    // canActivateChild: [AuthGuard],
    component: MainLayoutComponent,
    children: [{
      path: '',
      children: [
        {
          path: 'home',
          loadChildren: () => import('./pages/home/home.module')
            .then(m => m.HomeModule)
        },
        {
          path: 'my-cards',
          loadChildren: () => import('./pages/my-cards/my-cards.module')
            .then(m => m.MyCardsModule)
        },
        {
          path: 'statistics',
          loadChildren: () => import('./pages/statistics/statistics.module')
            .then(m => m.StatisticsModule)
        },
        {
          path: 'settings',
          loadChildren: () => import('./pages/settings/settings.module')
            .then(m => m.SettingsModule)
        },
      ]

    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
