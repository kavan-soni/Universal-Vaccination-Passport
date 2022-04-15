
// Import libraries
var Web3        = require('web3'),
    contract    = require("truffle-contract"),
    path        = require('path')
    ToDoList    = require('../build/contracts/TodoList.json');

    
var provider    = new Web3.providers.HttpProvider("http://localhost:7545");    
    // filePath    = path.join(__dirname, '../build/contracts/ToDoList.json');
 
// var contract_address = '0x4A64567423404beFAcff246bCDBb5bfD2C8Aa9F2'

// ToDoList.setProvider(provider);

// ToDoList.at(contract_address).then(function(instance) {
//     // coin = instance;
  
//     // Make a transaction that calls the function `sendCoin`, sending 3 MetaCoin
//     // to the account listed as account_two.
//     return instance.createRecord("Vinit");
//   }).then(function(result) {
  
//     console.log("Success 1");
//     console.log(result);
//   });



var ToDoListContract = contract(ToDoList);
ToDoListContract.setProvider(provider);

ToDoListContract.deployed().then(function(instance) {

    return instance.createRecord.call("Vinit", {from: '0xD928e3222352aecA659663aDA32f4AdB81e86339'})
    
}).then(function(result) {
    
    console.log("Success 2");
    console.log(result);
    
}, function(error) {
    console.log("Error");
    console.log(error);
}); 
    