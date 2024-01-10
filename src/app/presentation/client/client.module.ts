import { NgModule } from "@angular/core";
import { ClientRouting } from "./client.routing";
import { HomeComponent } from "./home/home.component";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        ClientRouting
    ]
})

export class ClientModule { }