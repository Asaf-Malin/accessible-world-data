import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomepageComponent } from "./about/homepage/homepage.component";
import { AboutComponent } from "./about/about/about.component";
import { ObjectsComponent } from "./lexemes/lexemes/lexemes.component";
import { HeaderComponent } from "./about/header/header.component";
import { FooterComponent } from "./about/footer/footer.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    ObjectsComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
