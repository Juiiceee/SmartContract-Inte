export const address = "0xc05e25Ae78687d2cEc6392B8eC47182Bb58cc152";
export const ABI = [
		{
			"type": "function",
			"name": "getNumber",
			"inputs": [],
			"outputs": [
				{
					"name": "",
					"type": "uint256",
					"internalType": "uint256"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "increment",
			"inputs": [],
			"outputs": [],
			"stateMutability": "nonpayable"
		},
		{
			"type": "function",
			"name": "number",
			"inputs": [],
			"outputs": [
				{
					"name": "",
					"type": "uint256",
					"internalType": "uint256"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "setNumber",
			"inputs": [
				{
					"name": "newNumber",
					"type": "uint256",
					"internalType": "uint256"
				}
			],
			"outputs": [],
			"stateMutability": "nonpayable"
		}
	]