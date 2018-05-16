import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { BrowseComponent } from './browse/browse.component';
import { BrowseCarouselComponent } from './browse-carousel/browse-carousel.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { masterFirebaseConfig } from './api-keys';
import { SignInComponent } from './sign-in/sign-in.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    BrowseCarouselComponent,
    VideoPlayerComponent,
    SignInComponent,
    SearchComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
