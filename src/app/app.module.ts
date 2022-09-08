import { SharedModule } from './shared/shared.module';
import { HttpGetService } from './shared/services/http-get.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './pages/search/search.component';
import { WrapperComponent } from './core/wrapper/wrapper.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpGetComponent } from './core/http-get/http-get.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    WrapperComponent,
    HttpGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  providers: [HttpGetService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
