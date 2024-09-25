"use client";
// import { useAccount, useDisconnect } from "wagmi";
import Connect from "./components/Connect";
import Button from "./components/Button";
import { address as addressContract, ABI } from "@/app/constants/smartContract";
import { useState } from "react";
import { useAccount, useReadContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { AccountNotDeployedError } from "viem/account-abstraction";

export default function Home() {
	const [amount, setAmount] = useState(0);
	const { address } = useAccount();

	const { data: hash, isPending, error, writeContract } = useWriteContract();
	const { data: read, refetch } = useReadContract({
		address: addressContract,
		abi: ABI,
		functionName: "getNumber",
		args: [],
	});

	const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash })

	const putNumber = async () => {
		writeContract({
			address: addressContract,
			abi: ABI,
			functionName: "setNumber",
			args: [amount],
			account: address,
		})
	}
	const getNumber = async () => {
		refetch();
		console.log(read);
	}

	return (
		<>
			<Connect />
			<div>
				<input className="text-black" type="number" onChange={(e) => { setAmount(Number(e.target.value)) }} />
				<Button onClick={putNumber} isLoading={isConfirming}>Put Number</Button>
				<span>{hash}</span>
				<Button onClick={getNumber}>Get Number</Button>
				<button onClick={() => {console.log({isConfirming}),
					console.log({isConfirmed})}}>Feur</button>
			</div>
		</>
	);
}
