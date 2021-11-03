const abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "bid",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "change_Owner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_sec",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_startprice",
                "type": "uint256"
            }
        ],
        "name": "createNewAuction",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_imgurl",
                "type": "string"
            }
        ],
        "name": "createNewCharacter",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "gameOwner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllCharacter",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "imgurl",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "onsale",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startprice",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "bidderhistory",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "bidpricehistory",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "endtime",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct NetShop.Net[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAuction",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "imgurl",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "onsale",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startprice",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "bidderhistory",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "bidpricehistory",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "endtime",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct NetShop.Net[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_sender",
                "type": "address"
            }
        ],
        "name": "getCharacter",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "imgurl",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "onsale",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startprice",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "bidderhistory",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "bidpricehistory",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "endtime",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct NetShop.Net[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getMyAuction",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "imgurl",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "onsale",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startprice",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "bidderhistory",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "bidpricehistory",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "endtime",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct NetShop.Net[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "getOwner_history",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "getPrice",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "gettime",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct NetShop.Owner[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "nets",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "imgurl",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "onsale",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "startprice",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "bidderhistory",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "bidpricehistory",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "endtime",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "result",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "imgurl",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "onsale",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "startprice",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "bidderhistory",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "bidpricehistory",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "endtime",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "temp",
        "outputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "getPrice",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "gettime",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]
// 合约地址
var address = "0xcc0d6728614241Ff46B9226A69A8da49Dbf81E1C";
var option  = {
    from: '0x7A715ca2e8c9Db89804A3A9779ef817258033A87', // default from address
    gasPrice: '20000000000'
}
var privateKey = "a0e58acfc9eaca0dff809c2fe35942fb6add0805b63ab02452994bb52d7aff1f";
var privateKey1 = "d7b0a3b8800ad16f7698f65bb92848d0f2e9b8916ab11506a39a4f9d09d22a5a";
var Account = "0x7A715ca2e8c9Db89804A3A9779ef817258033A87";
module.exports = {
    abi,
    address,
    option,
    privateKey,
    privateKey1,
}