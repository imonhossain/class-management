import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [
//     // {
//     //     path: '',
//     //     loadChildren: '../app/features/user/user.module#UserModule'
//     // },
//     {
//         path: '',
//         loadChildren: '../app/features/auth/login/login.module#LoginModule'
//     },
// ];
const routes: Routes = [
    {
      path: 'login',
      loadChildren: () => import('../app/features/auth/login/login.module').then(m => m.LoginModule)
    },
    {
      path: '',
      loadChildren: () => import('../app/features/user/user.module').then(m => m.UserModule)
    }
  ];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

