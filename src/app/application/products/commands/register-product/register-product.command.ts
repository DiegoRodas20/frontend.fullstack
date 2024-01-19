import { Product } from "../../../../domain/entities/product.model";
import { UseCase } from "../../../base/use-case.base";

export abstract class RegisterProductCommand implements UseCase<Product, boolean>{

    abstract execute(params: Product): boolean 

}