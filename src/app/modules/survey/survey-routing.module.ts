import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SurveyComponent } from "./components/survey/survey.component";

export const SURVEY_ROUTES: Routes = [
  {
    path: "",
    component: SurveyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(SURVEY_ROUTES)],
  exports: [RouterModule],
})
export class SurveyRoutingModule {}
