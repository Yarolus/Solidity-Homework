var Farmer = artifacts.require("Farmer");
var Wolf = artifacts.require("Wolf");
var Cow = artifacts.require("Cow");

let farmer = null;
let wolf = null;
let cow = null;

async function addAnimal(address){
    let result = await farmer.addAnimal(address);
}

async function feedAnimal(address, food){
    let result = await farmer.feedByAddress(address, food);
    console.log("feedAnimal result", result);
}

async function callAnimal(address){
    let result = await farmer.callByAddress(address);
    console.log("callAnimal result", result);
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
        await addAnimal(wolf.address);
        await feedAnimal(cow.address,"meat");
        await callAnimal(wolf.address);
        await feedAnimal(wolf.address,"stone");

    }catch(e){
        console.error(e);
    }
    
}