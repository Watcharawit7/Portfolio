import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioProfileComponent } from './portfolio-profile/portfolio-profile.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PortfolioAboutComponent } from './portfolio-about/portfolio-about.component';
import { PortfolioContactComponent } from './portfolio-contact/portfolio-contact.component';
import { PortfolioHomeComponent } from './portfolio-home/portfolio-home.component';
import { MenubarModule } from 'primeng/menubar';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { PortfolioInternComponent } from './portfolio-intern/portfolio-intern.component';



@NgModule({
  declarations: [
    PortfolioProfileComponent,
    PortfolioAboutComponent,
    PortfolioContactComponent,
    PortfolioHomeComponent,
    PortfolioInternComponent,
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    ButtonModule,
    TableModule,
    MenubarModule,
    ImageModule,
    CardModule
  ],

})
export class PortfolioModule { }
