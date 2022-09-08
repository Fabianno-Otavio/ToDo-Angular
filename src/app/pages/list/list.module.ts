import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'list',
        loadChildren: () => import('./list.component').then(m => m.ListComponent)
    },
    {
        path: 'dialog',
        loadChildren: () => import('./dialog/dialog.component').then(m => m.DialogComponent)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }

