import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { TopPicksComponent } from "./top-picks/top-picks.component";

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
    },
    {
        path: 'top-picks',
        component: TopPicksComponent
    }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class MainRouting {

}