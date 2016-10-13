import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EstateComponent } from './estate/estate.component';
import { CustomerComponent } from './customer/customer.component';
import { WarningComponent } from './warning/warning.component';
import { SignaturesComponent } from './signatures/signatures.component';
import { SignatureComponent } from './signature/signature.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    EstateComponent,
    CustomerComponent,
    WarningComponent,
    SignaturesComponent,
    SignatureComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
