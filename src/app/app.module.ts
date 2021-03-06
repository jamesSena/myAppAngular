import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF, registerLocaleData} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);
import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { rootRouterConfig } from './app.router';
import { ProdutoService } from './services/produto.services';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    ListaProdutoComponent  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig, {useHash:false})]
  ],
  providers: [
    ProdutoService,
    {provide:APP_BASE_HREF, useValue:'/teste'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
