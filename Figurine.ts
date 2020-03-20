import myToy from "./Toy";
export enum DBHeroes {
    SANGOKU = "SANGOKU",
    BEJITA ="BEJITA",
    BEERUS ="BEERUS",
    KAMESENNIN="KAMESENNIN",
  }
export default class Figurine extends myToy {
  constructor(DBHeroes:DBHeroes, type:string = "Figurine") {
    super(type);    
    
  }
}
