var Web3 = require('web3');

var provider = new Web3.providers.HttpProvider("http://localhost:7545");
var contract = require("@truffle/contract");
// var contract_address = "0x4A64567423404beFAcff246bCDBb5bfD2C8Aa9F2";

var MyContract = contract({
    abi: [
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "records",
            "outputs": [
                {
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "name": "content",
                    "type": "string"
                },
                {
                    "name": "completed",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "recordCount",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "content",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "completed",
                    "type": "bool"
                }
            ],
            "name": "RecordCreated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "completed",
                    "type": "bool"
                }
            ],
            "name": "RecordCompleted",
            "type": "event"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_content",
                    "type": "string"
                }
            ],
            "name": "createRecord",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_id",
                    "type": "uint256"
                }
            ],
            "name": "toggleCompleted",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]
})
// var ToDoList = require("../build/contracts/TodoList.json");
// console.log(ToDoList.type)
// ToDoList.setProvider(provider);

// ToDoList.at(contract_address).then(function(instance) {
//     return instance.createRecord("Vinit"); 

//   }).then(function(result) {
//     console.log("Success");
//     console.log(result);
//   })

// MyContract.setProvider(provider)

// var deployed;
// MyContract.deployed().then(function(instance) {
//   deployed = instance;
//   return instance.createRecord("Vinit");
// }).then(function(result) {
//   // Do something with the result or continue with more transactions.

//   console.log("Success")
//   console.log(result)
// });



const TodoList = require('../build/contracts/TodoList.json')

const toDoListContract = contract(TodoList);

var web3 = new Web3(provider)
const accounts = web3.eth.getAccounts().then(function (accounts) {

    // console.log(result)

    toDoListContract.setProvider(web3.currentProvider)

    toDoListContract.deployed().then(function (deployed) {

        console.log(accounts);
        deployed.createRecord("Vinit2", {from: accounts[0]});

    });
});




// console.log(web3.eth.getAccounts())