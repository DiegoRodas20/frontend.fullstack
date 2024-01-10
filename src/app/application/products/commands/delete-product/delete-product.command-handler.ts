import { DeleteProductCommand } from "./delete-product.command"

export class DeleteProductCommandHandler implements DeleteProductCommand {
    
    execute(idProduct: string): boolean {
        throw new Error("Method not implemented.")
    }
}