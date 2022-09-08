import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'wrapper',
    loadChildren: () => import('./core/wrapper/wrapper.component').then(m => m.WrapperComponent)
  },
  {
    path: 'wrapper/list',
    loadChildren: () => import('./pages/list/list.component').then(m => m.ListComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
