"use client";
import Image from "next/image";
import { ConnectButton, MediaRenderer, TransactionButton, useActiveAccount, useReadContract } from "thirdweb/react";
import thirdwebIcon from "@public/Ticketmint.svg";
import walletIcon from "@public/wallet-icon.svg"; // Replace with your wallet icon import
import ticketIcon from "@public/ticket-icon.svg"; // Replace with your ticket icon import
import { client } from "./client";
import { createWallet } from "thirdweb/wallets";
import { defineChain, getContract } from "thirdweb";
import { base } from "thirdweb/chains";
import { balanceOf, claimTo, getNFT } from "thirdweb/extensions/erc1155";
import { Transaction } from "@thirdweb-dev/react";
import { FaTwitter, FaDiscord } from "react-icons/fa"; // Import icons for X and Discord

export default function Home() {
  const account = useActiveAccount();
  const wallets = [createWallet("com.coinbase.wallet")];
  const contract = getContract({
    client: client,
    chain: defineChain(base),
    address: "0x5e92372BebE618599e1E3cd315bf0E25f7EBA563"
  });

  const { data: nft, isLoading: nftIsLoading } = useReadContract(
    getNFT,
    {
      contract: contract,
      tokenId: 0n
    }
  );
  const { data: ownedNFTs } = useReadContract(
    balanceOf, {
      contract: contract,
      owner: account?.address || "",
      tokenId: 0n
    }
  );

  return (
    <main className="min-h-screen flex flex-col items-center justify-center animated-gradient text-white p-4">
      <Menu />
      <div className="flex flex-col items-center text-center space-y-8 py-16 max-w-2xl mx-auto">
        <Header />

        <ConnectButton
          client={client}
          wallets={wallets}
          chain={defineChain(base)}
          connectButton={{
            label: (
              <>
                <Image
                  src={walletIcon}
                  alt="Wallet Icon"
                  width={24}
                  height={24}
                  className="inline-block mr-2"
                />
                Connect Coinbase Wallet to Mint Ticket
              </>
            )
          }}
        />

        <div className="flex flex-col items-center space-y-4">
          {nftIsLoading ? (
            <p className="text-xl">Loading...</p>
          ) : (
            <>
              {nft && (
                <MediaRenderer
                  client={client}
                  src={nft.metadata.image}
                  className="rounded-lg shadow-lg"
                />
              )}
              {account ? (
                <>
                  <p className="text-xl mt-4">
                    You own {ownedNFTs?.toString()} Tickets
                  </p>
                  <div className="relative">
                  <TransactionButton
  transaction={() =>
    claimTo({
      contract: contract,
      to: account.address,
      tokenId: 0n,
      quantity: 1n,
    })
  }
  onTransactionConfirmed={async () => {
    alert('Ticket Claimed!');
  }}
  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200 flex items-center"
>
  <div className="flex items-center">
    <Image
      src={ticketIcon}
      alt="Ticket Icon"
      width={20}
      height={20}
      className="mr-2"
    />
    <span>Mint Ticket</span>
  </div>
</TransactionButton>

                  </div>
                </>
              ) : (
                <p className="text-xl mt-4">
                  ONCHAIN SUMMER Buildathon by BASE
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
}

function Menu() {
  return (
    <nav className="flex justify-center items-center w-full py-4 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg fixed top-4 mx-auto max-w-3xl">
      <div className="flex space-x-6">
        <a href="#" className="text-white hover:text-blue-400 px-4 py-2 rounded transition-colors duration-200 bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-purple-500 hover:to-red-500">Home</a>
        <a href="#" className="text-white hover:text-blue-400 px-4 py-2 rounded transition-colors duration-200 bg-gradient-to-r from-blue-500 to-green-500 hover:from-purple-500 hover:to-yellow-500">Tickets</a>
        <a href="#" className="text-white hover:text-blue-400 px-4 py-2 rounded transition-colors duration-200 bg-gradient-to-r from-yellow-500 to-red-500 hover:from-green-500 hover:to-blue-500">Profile</a>
      </div>
      <div className="flex space-x-4 ml-8">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
          <FaTwitter size={24} />
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
          <FaDiscord size={24} />
        </a>
      </div>
    </nav>
  );
}

function Header() {
  return (
    <header className="flex flex-col items-center space-y-4 mb-12">
      <Image
        src={thirdwebIcon}
        alt="TicketMint"
        width={150}
        height={150}
        className="filter drop-shadow-lg"
      />
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
        Ticket Mint
        <span className="text-blue-400 ml-2">on Base</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-300">
        TicketMint is a Web3 dApp built on Base Chain, transforming event ticketing by enabling users to mint, claim, and trade unique NFT tickets. Enjoy secure, verifiable, and tamper-proof tickets for a seamless event experience.
      </p>
    </header>
  );
}
