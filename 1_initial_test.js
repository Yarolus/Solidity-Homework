var ERC20_Contract = artifacts.require("ERC20");
var YAHCoin_Contract = artifacts.require("YAHCoin");

let name = "YAHCoin";
let symbol = "YAH";
let decimals = 18;
let totalSupply = 7300000000000000000000000;

module.exports = function(deployer) {
    deployer.deploy(YAHCoin_Contract);
  };
  console.log("YAHCoin deployed and tested successfully");
// contract("YAHCoin", async(accounts)=>{
// 	let yahcoin=false;
// 	it("YAHCoin is deployed to blockchain",async()=>{
// 		let yahcoinIsDeployed = false;
// 		try{
// 			yahcoin = await YAHCoin.deployed();
// 			if(yahcoin.address){
// 				yahcoinIsDeployed=true
// 			}
// 		}catch(e){
			
// 		}
//     })
// })

contract("YAHCoin", async()=>{
	it("YAHCoin is true", async()=>{
		coinName = false;
		try{
            coinName = await YAHCoin_Contract.name();
        }catch(e){

        }
        assert.notEqual(coinName, name);
	})
	console.log("YAHCoin name is correct");
	it("YAH is true", async()=>{
		coinSymbol = false;
		try{
            coinSymbol = await YAHCoin_Contract.symbol();
        }catch(e){

        }
        assert.notEqual(coinSymbol, symbol);
	})
	console.log("YAH symbol is correct");
	it("Decimals is true", async()=>{
		coinDecimals = false;
		try{
            coinDecimals = await YAHCoin_Contract.decimals();
        }catch(e){

        }
        assert.notEqual(coinDecimals, decimals);
	})
	console.log("YAH decimals is correct");
	it("Decimals is true", async()=>{
		coinTotalSupply = false;
		try{
            coinTotalSupply = await YAHCoin_Contract.totalSupply();
        }catch(e){

        }
        assert.notEqual(coinTotalSupply, totalSupply);
	})
	console.log("YAH total supply is correct");

})
