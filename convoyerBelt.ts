import Furniture from "./Furniture";
import Packaging from "./Packaging";
import Toy from "./Toy";

export default class convoyerBelt extends Furniture {
  constructor(type:string =  "convoyer belt") {
    super();
    this.content = [];
    this.type = type
  }



}
