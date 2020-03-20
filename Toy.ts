export default class Toy {
  type: string ;
  constructor(type: string) {
    this.type = type;
  }
  isMoved():void {
    
    if (this.type === "Pony") {
      console.log("Huuuuuuhu!");
    }
    if (this.type === "Figurine") {
      console.log("Kamé Hamé Ha!");
    }
  }
  getType():string {
    return this.type;
  }
}
