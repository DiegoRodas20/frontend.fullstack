import { Product } from "../../../../domain/entities/product.model";
import { UseCase } from "../../../base/use-case.base";

export abstract class GetProductsQuery implements UseCase<null, Product[]>{
    
    abstract execute(params: null): Product[] 

}