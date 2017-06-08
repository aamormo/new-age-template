import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ButtonHeaderComponentComponent } from './button-header-component/button-header-component.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NavMenuItemComponent } from './nav-menu-item/nav-menu-item.component';
import { PresentationComponent } from './presentation/presentation.component';
import { PresentationTextComponent } from './presentation-text/presentation-text.component';
import { PresentationMobileComponent } from './presentation-mobile/presentation-mobile.component';
import { DownloadSectionComponent } from './download-section/download-section.component';
import { DownloadSectionBadgesComponent } from './download-section-badges/download-section-badges.component';
import { FeaturesSectionComponent } from './features-section/features-section.component';
import { FeatureHeaderComponent } from './feature-header/feature-header.component';
import { FeatureMobileComponent } from './feature-mobile/feature-mobile.component';
import { FeatureDescriptionComponent } from './feature-description/feature-description.component';
import { GetStartedSectionComponent } from './get-started-section/get-started-section.component';
import { SocialNetworksSectionComponent } from './social-networks-section/social-networks-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonHeaderComponentComponent,
    NavMenuComponent,
    NavMenuItemComponent,
    PresentationComponent,
    PresentationTextComponent,
    PresentationMobileComponent,
    DownloadSectionComponent,
    DownloadSectionBadgesComponent,
    FeaturesSectionComponent,
    FeatureHeaderComponent,
    FeatureMobileComponent,
    FeatureDescriptionComponent,
    GetStartedSectionComponent,
    SocialNetworksSectionComponent,
    FooterSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
