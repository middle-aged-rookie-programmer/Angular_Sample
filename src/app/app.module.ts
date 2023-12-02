import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VirtualscrollComponent } from './pages/virtualscroll/virtualscroll/virtualscroll.component';
import { TopComponent } from './pages/top/top.component';
import { GeneralScrollComponent } from './pages/virtualscroll/generalscroll/generalscroll.component';
import { DisplayComponent } from './pages/html/display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    VirtualscrollComponent,
    TopComponent,
    GeneralScrollComponent,
    DisplayComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
