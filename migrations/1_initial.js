var Farmer = artifacts.require("Farmer");
var Wolf = artifacts.require("Wolf");
var Cow = artifacts.require("Cow");
var Horse = artifacts.require("Horse");
var Dog = artifacts.require("Dog");

let farmer = null;
let wolf = null;
let cow = null;
let horse = null;
let dog = null;

// async function addAnimal(address){
//     let result = await farmer.addAnimal(address);
// }



async function callAnimal(address){
    let result1 = await farmer.callByAddress(address);
    console.log("callAnimal result", result1);
}
async function callAnimal(address){
    let result2 = await farmer.callByAddress(address);
    console.log("callAnimal result", result2);
}

async function feedAnimal(address, food){
    let result = await farmer.feedByAddress(address, food);
    console.log("feedAnimal result", result);
}

async function feedAnimal(address, food){
    let result = await farmer.feedByAddress(address, food);
    console.log("feedAnimal result", result);
}

module.exports = async (deployer)=>{

    try{
        try{
            farmer = await Farmer.deployed();
        }catch(e){
            await deployer.deploy(Farmer);
        }
        if(!farmer){
            farmer = await Farmer.deployed();
        }
        try{
            wolf = await Wolf.deployed();
        }catch(e){
            await deployer.deploy(Wolf,"Wolfenschanze");
        }
        if(!wolf){
            wolf = await Wolf.deployed();
        }
        try{
            cow = await Cow.deployed();
        }catch(e){
            await deployer.deploy(Cow,"Mooower");
        }
        if(!cow){
            cow = await Cow.deployed();
        }
        try{
            horse = await Horse.deployed();
        }catch(e){
            await deployer.deploy(Horse,"Igogoyer");
        }
        if(!horse){
            horse = await Horse.deployed();
        }
        try{
            dog = await Dog.deployed();
        }catch(e){
            await deployer.deploy(Dog,"Tuzik");
        }
        if(!dog){
            dog = await Dog.deployed();
        }
        let food1 = "plant";
        let food2 = "meat";
        
        await callAnimal(cow.address);
        await callAnimal(horse.address);
        try{
            wolf = await feedAnimal(wolf.address, food1);
        }catch(e){
            console.log("Wolf can`t eat", food1)
        }
        await feedAnimal(wolf.address, food2);
        await callAnimal(dog.address);
        try{
            dog = await feedAnimal(dog.address, food1);
        }catch(e){
            console.log("Dog can`t eat", food1)
        }

    }catch(e){
        console.error(e);
    }
    
}