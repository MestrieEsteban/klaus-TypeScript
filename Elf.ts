import Packaging from "./Packaging";
import Toy from "./Toy";
import Furniture from "./Furniture";

export default class Elf extends Furniture {
  _nickname: string;
  constructor(nickname: string) {
    super();
    this._nickname = nickname;
  }
  getNickname(): string {
    return this._nickname;
  }
  SetNickname(nickname: string): string {
    return (this._nickname = nickname);
  }
  pack(packaging: Packaging, toy: Toy): void {
    if (!packaging.isOpen) {
      console.log("Sorry this package is not open");
    } else if (packaging.toy.getType() !== "") {
      console.log("Sorry this package already filled");
    } else {
      packaging.insert(toy);
      console.log(`Yeaaaah! Just packing the toy ~~ ${toy.getType()} ~~`);
    }
  }
  unpack(packaging: Packaging): Toy {
    if (packaging.toy.getType() === "") {
      console.log("Sorry this package is already empty");
    } else {
      console.log(
        `Ooooooh! Just unpacking the toy ~~ ${packaging.toy.getType()} ~~`
      );
      packaging.open();
    }
    return packaging.toy;
  }
  take(furniture: Furniture, nindex: number  = -1 ) {
    super.take(furniture, nindex);
  }
  put(furniture: Furniture, object: Packaging | Toy) {
    super.put(furniture, object);
  }
  look(furniture: Furniture) {
    super.look(furniture)
  }
}
