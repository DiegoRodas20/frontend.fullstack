import { NgModule } from "@angular/core";
import { RegisterProductCommand } from "./commands/register-product/register-product.command";
import { RegisterProductCommandHandler } from "./commands/register-product/register-product.command-handler";

@NgModule({
     providers: [
          { provide: RegisterProductCommand, useClass: RegisterProductCommandHandler }
     ]
})

export class ProductModule { }