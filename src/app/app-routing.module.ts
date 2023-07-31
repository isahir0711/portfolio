import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'skills',component:ProjectsComponent},
  {path:'aboutme',component:AboutmeComponent},

  {path:'**',redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
