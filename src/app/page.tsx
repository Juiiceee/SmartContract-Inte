"use client";
// import { useAccount, useDisconnect } from "wagmi";
import Connect from "./components/Connect";
import Button from "./components/Button";

export default function Home() {
	return (
		<>
			<Connect />
			<div>
				<Button>Salut</Button>
			</div>
		</>
	);
}
