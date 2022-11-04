import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CustomerListComponent } from './customer-message-list/customer-message-list.component';
import { CustomerMessageComponent } from './customer-message/customer-message.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    CustomerListComponent,
    CustomerMessageComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    AvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
