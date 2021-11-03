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
var address = "0x67c75c7Bd7EFBFCeE2F6fa5c5faa7f9045cE2f56";
var option  = {
    from: '0x64eA1b7770317B8fE83d8747e5309894b25713EC', // default from address
    gasPrice: '20000000000'
}
module.exports = {
    abi,
    address,
    option,
}