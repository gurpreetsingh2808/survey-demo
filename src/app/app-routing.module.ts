import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SURVEY_ROUTES } from "./modules/survey/survey-routing.module";

const routes: Routes = [
  { path: "", redirectTo: "/survey", pathMatch: "full" },
  {
    path: "survey",
    children: [...SURVEY_ROUTES],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
