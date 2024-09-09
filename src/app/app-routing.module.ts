import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [  { path: '', redirectTo: '/', pathMatch: 'full' },
{path: 'accueil', component: AccueilComponent },
{path:'competences',component:SkillsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
