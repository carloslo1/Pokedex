import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { dbConfig } from './db.config';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    HttpClientModule,
    NgxIndexedDBModule.forRoot(dbConfig) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
