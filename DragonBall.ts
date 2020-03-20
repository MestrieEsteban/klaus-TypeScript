import Figurine, { DBHeroes } from "./Figurine";
export default class DragonBall extends Figurine {
  _character: DBHeroes;
  constructor(DBHeroes: DBHeroes) {
    super(DBHeroes);
    this._character = DBHeroes;
    this.instance();
  }
  instance() {
    console.log(`${this._character} is singing ->`);
    console.log(`CHA-LA HEAD CHA-LA`);
    console.log(`Nani ga okite mo kibun wa heno-heno kappa`);
    console.log(`CHA-LA HEAD CHA-LA`);
    console.log(`Mune ga pachi-pachi suru hodo`);
    console.log(`Sawagu Genki-Dama --Sparking !`);
  }
  isMoved()
    {
        let type:string = super.getType()
        super.isMoved()
    }
}
