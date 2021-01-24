class Animal{
    name;
    leg;
    sound;

    constructor(name,leg,sound){
        this.name = name;
        this.leg = leg;
        this.sound = sound;
    }
}

class Reptile extends Animal {
    weight;
    length;

    constructor(name,leg,sound, weight, length){
        super(name, leg, sound);
        this.weight = weight;
        this.length = length;
    }

    speak(){
        console.log('Con này kêu' + sound)
    }
}

class Mammal extends Animal{
    furColor;

    constructor(name,leg,sound,furColor){
        super(name, leg, sound);
        this.furColor = furColor;
    }
}

class Dog extends Mammal{

    constructor(name,furColor){
        super(name, 4, 'go go', furColor)
    }

    bite(){
        console.log("Ounch")
    }
}

