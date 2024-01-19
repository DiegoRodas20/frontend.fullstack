import { Product } from "../../../../domain/entities/product.model";
import { RegisterProductCommand } from "./register-product.command";

export class RegisterProductCommandHandler implements RegisterProductCommand{

    execute(params: Product): boolean {
        
        // Validar que este producto no este en la BD

        // Despues de validar recien se registraria el producto en la BD
        
        let result: boolean = true

        return result

    }
}