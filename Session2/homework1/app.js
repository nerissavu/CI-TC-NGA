class Memes{
    id;
    name;
    image;
    dateModified;

    constructor(id,name,image,dateModified){
        this.id = id;
        this.name = name;
        this.image = image;
        this.dateModified = dateModified;
    }
        
    show(){
        document.getElementById("name").innerHTML = this.name
        document.getElementById("image").src = this.image
        document.getElementById("dateModified").value = this.dateModified
    }

    update(data) {
        data = {
            name:'',
            image:'',
        }
        this.name = data.name;
        this.image = data.image;

        document.getElementById("name").innerHTML = this.name
        document.getElementById("image").src = this.image
        document.getElementById("dateModified").value = this.dateModified
    }
}

let meme = new Memes('1',"this is fine","https://www.kapwing.com/resources/content/images/2019/08/final_5d5c82e9c293510014745a35_273733.jpg",'2014-02-09')
console.log(meme)
meme.show()
meme.update({name: 'This is not fine at all',image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpfbbRnDND6EQX8bAxcnyfv1jjhg_h4NvZ0Q&usqp=CAU"})

class MemeCollection{
    id; 
    name;
    owner;
    memes;

    add(meme){

    }
    update(id, data){

    }
    delete(id){

    }
    show(){

    }
}
