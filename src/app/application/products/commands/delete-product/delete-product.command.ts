import { UseCase } from "../../../base/use-case.base";

export abstract class DeleteProductCommand implements UseCase<string, boolean>{

    abstract execute(idProduct: string): boolean
    
}