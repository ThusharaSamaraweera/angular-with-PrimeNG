import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {  BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ScrollingModule } from '@angular/cdk/scrolling'
import { BadgeModule } from 'primeng/badge';

import { SideBarComponent } from './side-bar/side-bar.component';
import { CustomerListComponent } from './customer-message-list/customer-message-list.component';
import { CustomerMessageComponent } from './customer-message/customer-message.component';
import { HeaderComponent } from './header/header.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { RepairsPanelComponent } from './repairs-panel/repairs-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    CustomerListComponent,
    CustomerMessageComponent,
    HeaderComponent,
    MainPanelComponent,
    RepairsPanelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,

    ScrollingModule,
    ButtonModule,
    AvatarModule,
    InputTextModule,
    DropdownModule,
    BadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
