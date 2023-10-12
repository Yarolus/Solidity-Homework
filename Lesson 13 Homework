console.log("Okey, let`s start!");

let _global=1;

let contactBookAddress = '0xa773e26d1b441927a44d0D1EbeD1a5390600f335';



function main(){
    let data = [];
    const { Web3 } = require('web3');
    const web3 = new Web3('http://127.0.0.1:7545');

    let contactIndex = 0

    let address = "";

        let contactBookAbi = require("./abi.js");

        let contract = new web3.eth.Contract(contactBookAbi, contactBookAddress);

        contract.methods._contacts(0).call().then((data)=>{
        console.log(data);
        });
        
        // починається частина, яку я взяв у Андрія з Гітхаба, але все одно не вийшло додати контакт
        new Promise((resolve) => {
            resolve(contract.methods.getContact(contactIndex).call()
                .then((data)=> {
                    console.log("First contact address: " + data);
                }));
            })
        .then((account)=>{
            console.log("Create new contact from account: " + account);
            let newContactName = "bbbb";
            return contract.methods.addContact(newContactName).send({from:account, gas:1000000})
                .then(()=> {
                    console.log("Contact '"+newContactName+"' is added OK.");
                });
            })
        .then(() => {
                return contract.methods.callContact(contactIndex+1).call()
                    .then((data)=> {
                        console.log("Call contact [1] : " + data);
                    });
            })
        .then(()=>{
                console.log("All done.")
            });
}
//частина Андрія закінчилася

main();
console.log("global in global ",_global)






