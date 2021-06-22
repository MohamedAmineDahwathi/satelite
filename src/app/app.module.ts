import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { IndexComponent } from './components/index/index.component';
import { ContactComponent } from './components/contact/contact.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { IndexFullComponent } from './components/index-full/index-full.component';
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
import { FooterHiddenComponent } from './components/footer-hidden/footer-hidden.component';
import { FooterCarouselComponent } from './components/footer-carousel/footer-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    IndexComponent,
    ContactComponent,
    CarouselComponent,
    IndexFullComponent,
    LargeCarouselComponent,
    PortfolioComponent,
    Project01Component,
    Project02Component,
    Project03Component,
    Project04Component,
    Project05Component,
    Project06Component,
    Project07Component,
    Project08Component,
    Project09Component,
    Project10Component,
    FooterHiddenComponent,
    FooterCarouselComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
