pragma solidity >0.4.22<0.9.0;


    


abstract contract Animal{
    
    string name;
    string canEat;
    bool expression;

    constructor(string memory _name){
        name = _name;
    }

    function compare(string memory str1, string memory str2) public pure returns(bool){
        return keccak256(abi.encodePacked(str1)) == keccak256(abi.encodePacked(str2));
    }

    function eat(string calldata _food) virtual view public returns(string memory){
        return "Animal eats";
    }

    function sleep() pure public returns(string memory){
        return "Zzzzzzzzzz";
    }

    function speak() virtual view public returns(string memory){
        return "Animal speaks";
    }
    modifier eatsPlant{
        canEat = "plant";
        _;
    }
    modifier eatsMeat{
        canEat = "meat";
        _;
    }
    modifier cantEatChocolate{
        keccak256(abi.encodePacked(canEat)) != keccak256(abi.encodePacked("chocolate"));
        _;
    }
}

abstract contract Herbivore is Animal {


    function eat(string calldata _food) override virtual view public returns(string memory) {
        require(compare(_food,canEat),"Herbivore cannot eat this");
        return "Nom-Nom";
    }
    
}

abstract contract Carnivore is Animal{

    function eat(string calldata _food) override view public returns(string memory){
        require(compare(_food,canEat), "Carnivore cannot eat this");
        return "Ararararar";
    }
}

abstract contract Omnivore is Animal{

    function eat(string calldata _food) override virtual view public returns(string memory){
        return "I will eat it";
    }
}

contract Horse is Herbivore{
    
    constructor(string memory _name) Animal(_name) eatsPlant{
    }

    function speak() override pure public returns(string memory){
        return "Ihohohoho";
    }
}

contract Cow is Herbivore{

    constructor(string memory _name) Animal(_name)eatsPlant{
    }

    function speak() override pure public returns(string memory){
        return "Mooooooow";
    }
}

contract Dog is Omnivore{

    constructor(string memory _name) Animal(_name) cantEatChocolate{
    }

    function eat(string calldata _food) pure override public returns(string memory){
        require(!compare(_food,"chocolate"),"Dogs cannot eat chocolate");
        if(compare(_food,"meat") || compare(_food,"plant")){
            return "Dog eats";
        }
        revert("Dogs cannot eat this");
    }

    function speak() override pure public returns(string memory){
        return "Woof";
    }
}

contract Pig is Omnivore{

    constructor(string memory _name) Animal(_name){
    }

    function speak() override pure public returns(string memory){
        return "Oink-oink";
    }
}

contract Wolf is Carnivore{
    constructor (string memory _name) Animal(_name)eatsMeat{
    }

    function speak() override pure public returns(string memory){
        return "Awooooo";
    }
}

contract Farmer{

    address[] public animals;

    function addAnimal(address animalAddress) public {
        animals.push(animalAddress);
    }

    function getAnimal(uint256 index) view public returns (Animal){
        return Animal(animals[index]);
    }

    function feedByIndex(uint256 index, string calldata food) view public returns(string memory){
        return getAnimal(index).eat(food);
    }

    function callByIndex(uint256 index) view public returns(string memory){
        return getAnimal(index).speak();
    }

    function feedByAddress(address animal, string calldata food) view public returns(string memory){
        return Animal(animal).eat(food);
    }

    function callByAddress(address animal) view public returns(string memory){
        return Animal(animal).speak();
    }
}

