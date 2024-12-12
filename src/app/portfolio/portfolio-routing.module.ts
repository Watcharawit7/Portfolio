import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioProfileComponent } from './portfolio-profile/portfolio-profile.component';
import { PortfolioHomeComponent } from './portfolio-home/portfolio-home.component';
import { PortfolioAboutComponent } from './portfolio-about/portfolio-about.component';
import { PortfolioContactComponent } from './portfolio-contact/portfolio-contact.component';
import { PortfolioInternComponent } from './portfolio-intern/portfolio-intern.component';

const routes: Routes = [
  { path: 'home', component: PortfolioHomeComponent },
  { path: 'about', component: PortfolioAboutComponent },
  { path: 'contact', component: PortfolioContactComponent },
  { path: 'intern', component: PortfolioInternComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}
