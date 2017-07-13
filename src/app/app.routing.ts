import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { FormsComponent } from "./forms/forms.component";
import { DynamoDBComponent } from './aws/dynamodb';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dynamodb', component: DynamoDBComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
