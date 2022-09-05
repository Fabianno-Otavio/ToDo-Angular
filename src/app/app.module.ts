import { HtmlGetService } from './http-get/http-get.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { MatIconModule } from '@angular/material/icon';
import { DialogComponent } from './dialog/dialog.component';
import { HttpGetComponent } from './http-get/http-get.component';
import { CheckedDirective } from './diretivas/checked.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SearchComponent,
    WrapperComponent,
    DialogComponent,
    HttpGetComponent,
    CheckedDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HtmlGetService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
