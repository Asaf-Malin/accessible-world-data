import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "./about/homepage/homepage.component";
import { AboutComponent } from "./about/about/about.component";
import { LexemesComponent } from "./lexemes/lexemes/lexemes.component";

const routes: Routes = [
  { path: "", component: HomepageComponent, pathMatch: "full" },
  { path: "about", component: AboutComponent },
  { path: "lexemes", component: LexemesComponent },
  { path: "**", component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
