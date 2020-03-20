import Packaging from "./Packaging";
import Toy from "./Toy";

export default class Box extends Packaging {
  constructor(isOpen:boolean = false) {
      super(isOpen)
  }
  open():void{
      super.open();
  }
  insert(toy:Toy):void{
    super.insert(toy);
  }
}
