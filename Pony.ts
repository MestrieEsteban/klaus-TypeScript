import myToy from "./Toy";

export default class Pony extends myToy {
  static _nb: number = 1;
  ponyID: number;
  constructor(type:string = "Pony") {
    super(type);
    this.ponyID = Pony._nb;
    Pony._nb++;
    this.instance();
  }
  instance() {
    console.log(`Pony #${this.ponyID} is singing ->`);
    console.log(`Dou-double poney, j’fais izi money`);
    console.log(`D’où tu m’connais ? Parle moi en billets violets`);
    console.log(`Dou-double poney, j’fais izi money`);
  }
  isMoved()
    {
        super.isMoved()
    }
  
}
