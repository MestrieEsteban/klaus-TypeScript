import Table from "./Table";
import convoyerBelt from "./convoyerBelt";
import Packaging from "./Packaging";
import Toy from "./Toy";
import { OutgoingMessage } from "http";

export default class Furniture {
  content: (Packaging | Toy)[];
  type: string;
  isBusy: boolean;
  constructor(type: string = "", isBusy: boolean = false) {
    this.content = [];
    this.type = type;
    this.isBusy = isBusy;
  }

  take(furniture: Furniture, nindex: number): void {
    if (furniture.content.length === 0) {
      console.log(`Sorry the ${furniture.constructor.name} is empty`);
    } else {
      if (furniture.content.length > nindex) {
        let item = furniture.content.splice(nindex, 1);
        furniture.isBusy = false;
        console.log(item[0].constructor.name + ` is been taken`);
      } else {
        console.log("Sorry this is an imaginary object");
      }
    }
  }
  put(furniture: Furniture, object: Packaging | Toy): void {
    if (furniture.constructor.name === "Table") {
      if (furniture.content.length >= 10) {
        console.log("We can only have 10 objects maximum");
      } else {
        furniture.content.push(object);
      }
    }
    if (furniture.constructor.name === "convoyerBelt") {
      if (furniture.isBusy) {
        console.log("We can have only one object on the conveyor belt");
      } else {
        furniture.isBusy = true;
        furniture.content.push(object);
      }
    }
  }
  out(furniture: Furniture): void {
    if (furniture.isBusy) {
      furniture.isBusy = false;
      furniture.content = [];
    }
  }
  look(furniture: Furniture) {
    let onFurniture: string[] = [];
    
    furniture.content.forEach(element => {
      if (element instanceof Toy) {
        onFurniture.push("Toy");
      }
      if (element instanceof Packaging) {
        onFurniture.push("Packaging");
      }
    });
    console.log(onFurniture);
    
  }
}
