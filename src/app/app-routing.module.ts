import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ContactComponent } from './components/contact/contact.component';
import { IndexFullComponent } from './components/index-full/index-full.component';
import { IndexComponent } from './components/index/index.component';
import { LargeCarouselComponent } from './components/large-carousel/large-carousel.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { Project01Component } from './components/project01/project01.component';
import { Project02Component } from './components/project02/project02.component';
import { Project03Component } from './components/project03/project03.component';
import { Project04Component } from './components/project04/project04.component';
import { Project05Component } from './components/project05/project05.component';
import { Project06Component } from './components/project06/project06.component';
import { Project07Component } from './components/project07/project07.component';
import { Project08Component } from './components/project08/project08.component';
import { Project09Component } from './components/project09/project09.component';
import { Project10Component } from './components/project10/project10.component';

const routes: Routes = [
  {
    path:'',
    component:IndexComponent
  },
  {
    path:'index-full',
    component:IndexFullComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'carousel',
    component:CarouselComponent
  },
  {
    path:'large-carousel',
    component:LargeCarouselComponent
  },
  {
    path:'portfolio',
    component:PortfolioComponent
  },
  {
    path:'project01',
    component:Project01Component
  },
  {
    path:'project02',
    component:Project02Component
  },
  {
    path:'project03',
    component:Project03Component
  },
  {
    path:'project04',
    component:Project04Component
  },
  {
    path:'project05',
    component:Project05Component
  },
  {
    path:'project06',
    component:Project06Component
  },
  {
    path:'project07',
    component:Project07Component
  },
  {
    path:'project08',
    component:Project08Component
  },
  {
    path:'project09',
    component:Project09Component
  },
  {
    path:'project10',
    component:Project10Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
