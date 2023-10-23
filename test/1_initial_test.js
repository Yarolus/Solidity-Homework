var Farmer = artifacts.require("Farmer");
var Horse = artifacts.require("Horse");
var Dog = artifacts.require("Dog");

let farmer = null;
let horse = null;
let dog = null;

const HORSE_NAME = "Igogosha";
const DOG_NAME = "Tuzik";

const WOLF_NAME = "Akella";
const WOLF_SPEAK = "Awoo";
const ANIMAL_SLEEP = "Z-z-z...";
const ANIMAL_EATS_MEAT = "Animal eats meat";
const ANIMAL_EATS_PLANT = "Animal eats plant";
const ANIMAL_EATS_CHOCOLATE = "Animal eats chocolate";
const NOM_NOM = "Nom-Nom";
const DOG_EATS = "Dog eats";
let ANIMAL_CANNOT_EAT_IT = "Animal cannot eat it";

const PLANT = "plant";
const MEAT = "meat";
const CHOCOLATE = "chocolate";


// Horse and Farmer

// Horse has the correct name. +
// Horse can sleep. +
// Horse can eat “plant”. +
// Horse cannot eat ”meat”, ”not-food”, ”plastic”. 
// Farmer can call Horse, Horse responds correctly (”Igogo” або інші відповідні звуки які видає ваш контракт Horse). +
// Farmer can feed Horse with plant(if you have any other plant-based food - it is okay. +
// Farmer cannot feed Horse with anything else(”meat”,”plastic”,”fingers”,etc). +

// (опціонально) *Dog and Farmer

// Dog has the correct name. +
// Dog can sleep. +
// Dog can eat “plant”. +
// Dog can eat ”meat”. +
// Dog cannot eat ”not-food”, ”plastic”, ”chocolate”. +
// Farmer can call Dog, Dog responds correctly.(”Woof” або інші відповідні звуки які видає ваш контракт Dog) +
// Farmer can feed Dog with ”meat”,”plant”. +
// Farmer cannot feed Dog with ”not-food”, ”plastic” and anything else.* +



contract("Farmer", async(accounts)=>{
	let farmer=false;
    let horse=false;
    let dog=false;
	it("Farmer is deployed to blockchain",async()=>{
		let farmerIsDeployed = false;
		try{
			farmer = await Farmer.deployed();
			if(farmer.address){
				farmerIsDeployed=true
			}
		}catch(e){
			
		}
        let horseIsDeployed = false;

        try{
            horse = await Horse.deployed();
            if(horse.address){
                horseIsDeployed=true
            }
        }catch(e){

        }
    
        
        let dogIsDeployed = false;
        
        try{
            dog = await Dog.deployed();
            if(dog.address){
                dogIsDeployed=true
            }
        }catch(e){
                
        }
	    })
		


    it("Farmer can call Horse",async()=>{
        
        let callHorse = await farmer.callByAddress(horse.address);
        console.log(callHorse);
    })
    
    it("Farmer can feed Horse with plant", async()=>{
        
        let feedHorse = await farmer.feedByAddress(horse.address, PLANT);
    })
    it("Farmer can not feed Horse with anything else",async()=>{
        let eatsMeat = false;
        let canEatChocolate = false;
        let eatsPlastic = false;
        try{
            eatsPlastic = await farmer.feedByAddress(horse.address, "plastic");
        }catch(e){

        }
        assert.notEqual(eatsPlastic, NOM_NOM);
        try{
            canEatChocolate = await farmer.feedByAddress(horse.address, CHOCOLATE);
        }catch(e){

        }

        assert.notEqual(canEatChocolate, NOM_NOM);
        try{
            eatsMeat = await farmer.feedByAddress(horse.address, MEAT);
        }catch(e){

        }

        assert.notEqual(canEatChocolate, NOM_NOM);
    })
    it("Farmer can call Dog",async()=>{
        
        let callDog = await farmer.callByAddress(dog.address);
        console.log(callDog);
    })
    it("Farmer can feed Dog with plant", async()=>{
        await farmer.feedByAddress(dog.address, PLANT);
    })
    it("Farmer can feed Dog with meat", async()=>{
        await farmer.feedByAddress(dog.address, MEAT);
    })
    it("Farmer can not feed Dog with anything else",async()=>{
        let eatsNotFood = false;
        let canEatChocolate = false;
        let eatsPlastic = false;
        try{
            eatsNotFood = await farmer.feedByAddress(dog.address, "not-food");
        }catch(e){

        }
        assert.notEqual(eatsNotFood, DOG_EATS);
        try{
            canEatChocolate = await farmer.feedByAddress(dog.address, CHOCOLATE);
        }catch(e){

        }

        assert.notEqual(canEatChocolate, DOG_EATS);
        try{
            eatsPlastic = await farmer.feedByAddress(dog.address, "plastic");
        }catch(e){

        }

        assert.notEqual(eatsPlastic, DOG_EATS);
    })

})
 contract ("Horse", async(accounts)=>{
    let horse=false;
    it("Horse is deployed to blockchain", async()=>{
        let horseIsDeployed = false;

        try{
            horse = await Horse.deployed();
            if(horse.address){
                horseIsDeployed=true
            }
        }catch(e){

        }
        assert.equal(horseIsDeployed, true, "Horse is not deployed");
    });
    it(`Horse is named ${HORSE_NAME}`,async()=>{
        let name = await horse.getName();

    })
    it("Horse can sleep",async()=>{
        let sleep = await horse.sleep();
    })
    it("Horse can eat plant", async()=>{
        let eat = await horse.eat(PLANT);
    })

    it("Horse cannot eat it",async()=>{
        let eatsMeat = false;
        let canEatChocolate = false;
        let eatsPlastic = false;
        try{
            eatsMeat = await horse.eat(MEAT);
        }catch(e){

        }
        assert.notEqual(eatsMeat, NOM_NOM);
        try{
            canEatChocolate = await horse.eat(CHOCOLATE);
        }catch(e){

        }
        assert.notEqual(canEatChocolate, NOM_NOM);
        try{
            eatsPlastic = await horse.eat("plastic");
        }catch(e){

        }
        assert.notEqual(eatsPlastic, NOM_NOM);
        });
    })
    contract ("Dog", async(accounts)=>{
            let dog=false;
            it("Dog is deployed to blockchain", async()=>{
                let dogIsDeployed = false;
        
                try{
                    dog = await Dog.deployed();
                    if(dog.address){
                        dogIsDeployed=true
                    }
                }catch(e){
                
                }
            })
            it(`Dog is named ${DOG_NAME}`,async()=>{
                let name = await dog.getName();
        
            })
            it("Dog can sleep",async()=>{
                let sleep = await dog.sleep();
            })
            it("Dog can eat plant", async()=>{
                let eat = await dog.eat(PLANT);
            })
            it("Dog can eat meat", async()=>{
                let eat = await dog.eat(MEAT);
            })
            it("Dog cannot eat it",async()=>{
                let eatsNotFood = false;
                let canEatChocolate = false;
                let eatsPlastic = false;
                try{
                    eatsNotFood = await dog.eat("not-food");
                }catch(e){
        
                }
                assert.notEqual(eatsNotFood, DOG_EATS);
                try{
                    canEatChocolate = await dog.eat(CHOCOLATE);
                }catch(e){
        
                }
                assert.notEqual(canEatChocolate, DOG_EATS);
                try{
                    eatsPlastic = await dog.eat("plastic");
                }catch(e){
        
                }
                assert.notEqual(eatsPlastic, DOG_EATS);
                });
        })
    
