import {Memes} from './meme.js';
import {MemeCollection} from './memeCollection.js';

let meme1 = new Memes('1',"this is fine","https://www.kapwing.com/resources/content/images/2019/08/final_5d5c82e9c293510014745a35_273733.jpg",'2014-02-09');
let meme2 = new Memes('2',"this is not fine at all","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpfbbRnDND6EQX8bAxcnyfv1jjhg_h4NvZ0Q&usqp=CAU",'2020-10-20' );
let meme3 = new Memes('3',"I have no idea what i am doing ", 'https://i.barkpost.com/wp-content/uploads/2015/02/featmeme.jpg?q=70&fit=crop&crop=entropy&w=808&h=500', '2021-1-2' )
let memeCollection1 = new MemeCollection(1,'test Meme','Nerie',[meme1,meme2])
console.log(meme1)
console.log(memeCollection1)

memeCollection1.add(meme3)
console.log(memeCollection1)

memeCollection1.delete(2)
console.log(memeCollection1)

memeCollection1.update("1",meme2)

memeCollection1.show()


