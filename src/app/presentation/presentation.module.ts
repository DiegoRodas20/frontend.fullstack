import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationModule } from "../application/application.module";
import { DomainModule } from "../domain/domain.module";
import { InfrastructureModule } from "../infrastructure/infrastructure.module";
import { SharedModule } from "../shared/shared.module";
import { PresentationComponent } from "./presentation.component";
import { PresentationRouting } from "./presentation.routing";


@NgModule({
    declarations:[
        PresentationComponent
    ],
    imports: [
        ApplicationModule,
        DomainModule,
        InfrastructureModule,
        SharedModule,
        BrowserModule,
        BrowserAnimationsModule,
        PresentationRouting
    ],
    bootstrap: [PresentationComponent]
})

export class PresentationModule { }