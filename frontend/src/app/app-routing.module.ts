import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShoppingCartComponent } from './components/shop/shopping-cart/shopping-cart.component';
//import { AuthGuard } from './guards/auth.guard';
//import { NotAuthGuard } from './guards/notAuth.guard';

const appRoutes = [
  { path: '',
    component: ShopComponent
  },
  { path: 'login',
    component: LoginComponent
  },
  { path: 'shop',
    component: ShopComponent
  },
  { path: 'checkout',
    component: ShoppingCartComponent
  },
  /*
  { path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  { path: 'registro',
    component: RegistroComponent,
    canActivate: [NotAuthGuard]
  },
  */
  { path: '**',
  component: ShopComponent
  } // Carga el componente y deja la url tal cual, * Recirecciona al componente cambiando la URL
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
