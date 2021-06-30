import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FilmsListComponent } from "./films-list/films-list.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "film-list",
    component: FilmsListComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class FilmsRoutingModule {}
