import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {Http, HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap';

import {BlankLayoutComponent} from './views/layouts/blank/blankLayout.component';
import {AuthService} from './sdk/auth.service';
import {LoginComponent} from './views/basic-pages/login/login.component';
import {RegisterComponent} from './views/basic-pages/register/register.component';
import {AuthGuardService} from './services/auth-guard.service';
import {MainlyComponent} from './views/layouts/mainly/mainly.component';
import {ClientesComponent} from './views/clientes/list/clientes.component';
import {NavigationComponent} from './views/layouts/mainly/navigation/navigation.component';
import {TopnavbarComponent} from './views/layouts/mainly/topnavbar/topnavbar.component';
import {FooterComponent} from './views/layouts/mainly/footer/footer.component';
import {RegisterOkComponent} from './views/basic-pages/register-ok/register-ok.component';
import {PessoaService} from './sdk/pessoa.service';
import {ClientePersistComponent} from './views/clientes/persist/cliente-persist.component';
import {ClienteService} from './sdk/cliente.service';
import {ExtendedHttpService} from './services/extended-http.service';
import {EnderecoModalComponent} from './views/modals/endereco-modal/endereco-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    BlankLayoutComponent,
    LoginComponent,
    RegisterComponent,
    MainlyComponent,
    ClientesComponent,
    NavigationComponent,
    TopnavbarComponent,
    FooterComponent,
    RegisterOkComponent,
    ClientePersistComponent,
    EnderecoModalComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [
    AuthService,
    PessoaService,
    ClienteService,
    AuthGuardService,
    { provide: Http, useClass: ExtendedHttpService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
