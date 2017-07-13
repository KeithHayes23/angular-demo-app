import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent} from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { routing } from "./app.routing";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule, MdIconRegistry } from '@angular/material';
import 'hammerjs';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { AwsCommonComponent } from './aws';
import { DynamoDBComponent } from './aws/dynamodb';
import { DynamoDBListComponent } from './aws/dynamodb';
import { CommonListItemComponent } from './common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormsComponent,
    MenuBarComponent,
    AwsCommonComponent,
    DynamoDBComponent,
    DynamoDBListComponent,
    CommonListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [MdIconRegistry],
  bootstrap: [AppComponent]
})


export class AppModule { }
