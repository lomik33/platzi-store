import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DemoComponent } from './components/demo/demo.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,

    children: [
      { //reglas de redireccion se pasan en el children
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },

      {


        path: 'home',
        loadChildren: () => import('./components/home/home.module').then( m => m.HomeModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./modules/products/products.module').then(p => p.ProductsModule)
      },
      {
        path: 'contact',
        component: ContactComponent,
        canActivate: [AdminGuard],
      },
    ],
  },


  {
    path: 'demo',
    component: DemoComponent,
  },

  /* Debe estar después para que redireccione a los componentes que no encuentre*/
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules //Carga los modulos conforme este desocupado el navegador y no en el primer load
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
