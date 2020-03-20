import Packaging from "./Packaging";
import Toy from "./Toy";

export default class GiftWrap extends Packaging {
  
  constructor(isOpen:boolean = true) {
      super(isOpen)
      this.isOpen = true
  }
  insert(toy:Toy):void{
    super.insert(toy);
  }
}
