export class MemeCollection{
    memes = [];
    id; 
    name;
    owner;
    
    constructor(id, name, owner, memes){
        this.id = id;
        this.name = name;
        this.owner = owner;
        this.memes = memes;
    }

    add(meme){
        this.memes.push(meme);
    }
    update(id, data){
        for (let i = 0; i < this.memes.length; i++) {
            if(this.memes[i].id == id) {
                this.memes[i] = data;
                console.log("Meme updated");
            }
            else{
                console.log(`Can't find the meme with id ${id}`);
                console.log(this.memes);
            }
        }    
    }
    delete(id){
        for (let i = 0; i < this.memes.length; i++) {
            if(this.memes[i].id == id) {
                this.memes.splice(i, 1);
                console.log("Meme deleted");
            }
        }
    }
    show() {
        if (this.memes.length > 0) {
          console.log(this.memes);
        } else {
          console.log("Khong co meme");
        }
      }
}

let meme1 = new Memes('1',"this is fine","https://www.kapwing.com/resources/content/images/2019/08/final_5d5c82e9c293510014745a35_273733.jpg",'2014-02-09')
console.log(meme1.show());
// let memeCollection 1 = ('')