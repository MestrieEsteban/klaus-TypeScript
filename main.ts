import Toy from './Toy';
import Pony from './Pony';
import {DBHeroes} from './Figurine';
import DragonBall from './DragonBall';
import Packaging from './Packaging';
import Box from './Box';
import GiftWrap from './GiftWrap';
import Elf from './Elf';
import Table from './Table';
import convoyerBelt from './convoyerBelt';



console.log("--- STEP #1 ---");
const pony: Pony = new Pony();
const pony2: Pony = new Pony();
console.log('');
const goku: DragonBall = new DragonBall(DBHeroes.SANGOKU);
console.log('');
pony.isMoved();
goku.isMoved();
console.log('');
console.log("--- STEP #2 ---");
const esteban: Elf = new Elf('Esteban')
const box: Packaging = new Box();
esteban.pack(box, pony)
box.open()
esteban.pack(box, pony)
const paper: Packaging = new GiftWrap()
esteban.pack(paper, pony)
esteban.pack(paper, pony)
const toy: Toy = esteban.unpack(paper)
console.log(toy === pony)
try {
    esteban.unpack(paper);
} catch (e) {
    console.log(e.message);
}
console.log('');
console.log("--- STEP #3 ---");
const table: Table = new Table()
const convoyer: convoyerBelt = new convoyerBelt()

esteban.take(table)
esteban.put(table, pony)
esteban.put(table, box)
esteban.put(table, box)
esteban.put(table, goku)
esteban.take(table, 1)
esteban.take(table, 50)
esteban.out(convoyer);
esteban.look(table);


