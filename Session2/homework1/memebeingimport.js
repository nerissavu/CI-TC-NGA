import {Memes} from './meme.js';
import {MemeCollection} from './memeCollection.js';

let meme1 = new Memes('1',"this is fine","https://www.kapwing.com/resources/content/images/2019/08/final_5d5c82e9c293510014745a35_273733.jpg",'2014-02-09');
let meme2 = new Memes('2',"this is not fine at all","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpfbbRnDND6EQX8bAxcnyfv1jjhg_h4NvZ0Q&usqp=CAU", );

let memeCollection1 = new MemeCollection(1,'test Meme','Nerie',[meme1,meme2])
console.log(meme1)
console.log(memeCollection1)