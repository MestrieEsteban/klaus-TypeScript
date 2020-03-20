import Furniture from "./Furniture";
import Packaging from "./Packaging";
import Toy from "./Toy";

export default class Table extends Furniture {
  constructor(type:string =  "table") {
    super();
    this.content = [];
    this.type = type
  }



}
