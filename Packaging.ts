import Toy from "./Toy";

export default class Packaging {
    isOpen : boolean = false;
    toy : Toy;
  constructor(isOpen:boolean) {
      this.toy = new Toy('')
  }
  open():void{
      this.isOpen = true;
  }
  insert(toy:Toy):void{
      this.toy = toy;
      this.isOpen = false;
  }
}
