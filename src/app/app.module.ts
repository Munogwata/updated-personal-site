import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/universal/nav-bar/nav-bar.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { HomePageComponent } from './components/page-components/home/home-page/home-page.component';
import { WavyTaglineComponent } from './components/page-components/home-components/wavy-tagline/wavy-tagline.component';
import { WavyTagsCaptionComponent } from './components/page-components/home-components/wavy-tags-caption/wavy-tags-caption.component';
import { WavyContentTableComponent } from './components/page-components/home-components/wavy-content-table/wavy-content-table.component';
import { WavyProjectCardsComponent } from './components/page-components/home-components/wavy-project-cards/wavy-project-cards/wavy-project-cards.component';
import { WavyApiObDefiComponent } from './components/page-components/home-components/wavy-api-ob-defi/wavy-api-ob-defi/wavy-api-ob-defi.component';
import { ScoreContentComponent } from './components/page-components/home-components/score-content/score-content.component';
import { AstuteContentComponent } from './components/page-components/home-components/astute-content/astute-content.component';
import { PersonalWebsiteComponent } from './components/page-components/home-components/personal-website/personal-website.component';
import { StackFeaturesComponent } from './components/page-components/home-components/stack-features/stack-features.component';
import { ChatbotComponent } from './components/page-components/home-components/chatbot/chatbot.component';
import { AstuteImageBlockComponent } from './components/page-components/home-components/astute-image-block/astute-image-block.component';
import { KnowMeComponent } from './components/page-components/home-components/know-me-image/know-me.component';
import { FeaturesColumnComponent } from './components/page-components/home-components/features-column/features-column.component';
import { StackColumnComponent } from './components/page-components/home-components/stack-column/stack-column.component';
import { FooterComponent } from './components/page-components/footer/footer.component';
import { SocialMediaBarComponent } from './components/page-components/social-media-bar/social-media-bar.component';





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    WavyTaglineComponent,
    WavyTagsCaptionComponent,
    WavyContentTableComponent,
    WavyProjectCardsComponent,
    WavyApiObDefiComponent,
    ScoreContentComponent,
    AstuteContentComponent,
    PersonalWebsiteComponent,
    StackFeaturesComponent,
    ChatbotComponent,
    AstuteImageBlockComponent,
    KnowMeComponent,
    FeaturesColumnComponent,
    StackColumnComponent,
    FooterComponent,
    SocialMediaBarComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 
    MatToolbarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
