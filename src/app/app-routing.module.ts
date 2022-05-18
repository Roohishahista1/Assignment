import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ApicallsComponent } from './apicalls/apicalls.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
 {path:'\home',component:HomeComponent} ,
 {path:'\apicalls',component:ApicallsComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
