import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //localhost:4200/
  {
    path: '',
    loadChildren: () =>
      import('./Pages/home-template/home-template.module').then(
        (m) => m.HomeTemplateModule
      ),
  },
  //localhost:4200/admin
  {
    path: 'admin',
    loadChildren: () =>
      import('./Pages/admin-template/admin-template.module').then(
        (m) => m.AdminTemplateModule
      ),
  },

  //page not found
  {
    path: '**',
    loadChildren: () =>
      import('./Pages/page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
