import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { BrowseComponent } from './browse/browse.component';
import { VideoPlayerComponent } from './video-player/video-player.component';


@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    VideoPlayerComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
