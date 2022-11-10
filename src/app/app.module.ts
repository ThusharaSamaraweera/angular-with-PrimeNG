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
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { SplitButtonModule } from 'primeng/splitbutton';

import { SideBarComponent } from './side-bar/side-bar.component';
import { CustomerListComponent } from './customer-message-list/customer-message-list.component';
import { CustomerMessageComponent } from './customer-message/customer-message.component';
import { HeaderComponent } from './header/header.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { RepairsPanelComponent } from './repairs-panel/repairs-panel.component';
import { RepairPartComponent } from './repair-part/repair-part.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { MessagePanelUpperSectionComponent } from './message-panel-upper-section/message-panel-upper-section.component';
import { MessageTypingSectionComponent } from './message-typing-section/message-typing-section.component';
import { MessageListComponent } from './message-list/message-list.component';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    CustomerListComponent,
    CustomerMessageComponent,
    HeaderComponent,
    MainPanelComponent,
    RepairsPanelComponent,
    RepairPartComponent,
    CustomerDetailsComponent,
    MessagePanelUpperSectionComponent,
    MessageTypingSectionComponent,
    MessageListComponent,
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
    BadgeModule,
    DividerModule,
    CardModule,
    SplitButtonModule,
    
    NgxsModule.forRoot([], {
      developmentMode: !environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
