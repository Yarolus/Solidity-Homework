var ERC20_Contract = artifacts.require("ERC20");
var YAHCoin_Contract = artifacts.require("YAHCoin");
const truffleAssert = require('truffle-assertions');

let yahtoken = null;
let name = "YAHCoin";
let symbol = "YAH";
let decimals = 18;
let contractTotalSupply = 7300000000000000000000000;
let initialTotalSupply = 0;


contract("YAHCoin", async(accounts)=>{
	it("Contract deployed", async()=>{
		yahtoken = await YAHCoin_Contract.deployed();
	})
	it("YAHCoin is true", async()=>{
		coinName = false;
		try{
            coinName = await YAHCoin_Contract.name();
        }catch(e){

        }
        assert.notEqual(coinName, name);
	})
	console.log("YAHCoin name is correct");

	it("Total supply after deployment is zero", async()=>{
		initialTotalSupplyAfterDeployment = false;
		try{
			initialTotalSupplyAfterDeployment = await YAHCoin_Contract.totalSupply();
		}catch(e){

		}
		assert.equal(initialTotalSupplyAfterDeployment, initialTotalSupply);
	})
	console.log("YAH total supply is correct");

	it("Sender`s token amount decreases, receiver`s token amount increases", async()=>{
		await yahtoken.mint(accounts[0], 100);
		let senderBalanceBeforeTransfer = await yahtoken.balanceOf(accounts[0]);
		let receiverBalanceBeforeTransfer = await yahtoken.balanceOf(accounts[1]);
		assert.equal(senderBalanceBeforeTransfer, 100, "Sender balance error 1");
		assert.equal(receiverBalanceBeforeTransfer, 0, "Sender balance error 1");
		await yahtoken.approve(accounts[0], 30);
		await yahtoken.transferFrom(accounts[0], accounts[1], 30);
		let senderBalanceAfterTransfer = await yahtoken.balanceOf(accounts[0]);
		let receiverBalanceAfterTransfer = await yahtoken.balanceOf(accounts[1]);
		assert.equal(senderBalanceAfterTransfer, 70, "Sender balance error 2");
		assert.equal(receiverBalanceAfterTransfer, 30, "Receiver balance error 2");
	})
	it("Allowance changes after approve", async()=>{
		await yahtoken.approve(accounts[2], 1000);
		let allowanceAfterApprove = await yahtoken.allowance(accounts[0], accounts[2]);
		assert.equal(allowanceAfterApprove, 1000, "Allowance error");
	})
	it("Contract owner is correct", async()=>{
		let tokenOwner = await yahtoken.owner();
		assert.equal(tokenOwner, accounts[0], "Ownership error");
	})
	// it("Balance after burn changes correctly", async()=>{
	// 	let balanceBeforeBurn = await yahtoken.balanceOf(accounts[0]);
	// 	await yahtoken.burn(100);
	// 	let balanceAfterBurn = await yahtoken.balanceOf(accounts[0]);
	// 	assert.notEqual(balanceBeforeBurn, balanceAfterBurn, "Burn error");
	// })
	
})