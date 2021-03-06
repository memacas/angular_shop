import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { DetailComponent } from './components/detail/detail.component';

//import { AuthGuard } from './guards/auth.guard';
//import { NotAuthGuard } from './guards/notAuth.guard';

const appRoutes = [
  { path: '',
    component: LoginComponent
  },
  { path: 'login',
    component: LoginComponent
  },
  { path: 'showcase',
    component: ShowcaseComponent
  },
  { path: 'checkout',
    component: CheckoutComponent
  },
  { path: 'detail/:id',
    component: DetailComponent
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
  component: LoginComponent
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
