import { useActiveAccount, useReadContract } from 'thirdweb/react';
import { client } from './client';
import { createWallet } from 'thirdweb/wallets';
import { defineChain, getContract } from 'thirdweb';
import { base } from 'thirdweb/chains';
import { balanceOf } from 'thirdweb/extensions/erc1155';

function Profile() {
  const account = useActiveAccount();
  const wallets = [createWallet('com.coinbase.wallet')];
  const contract = getContract({
    client: client,
    chain: defineChain(base),
    address: '0x5e92372BebE618599e1E3cd315bf0E25f7EBA563',
  });

  const { data: ownedNFTs } = useReadContract(balanceOf, {
    contract: contract,
    owner: account?.address || '',
    tokenId: 0n,
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 to-purple-900 text-white p-4">
      <Menu />
      <div className="flex flex-col items-center text-center space-y-8 py-16 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight">Profile</h1>
        {account ? (
          <p className="text-xl mt-4">Number of Tickets Minted: {ownedNFTs?.toString()}</p>
        ) : (
          <p className="text-xl mt-4">Please connect your wallet to view profile information.</p>
        )}
      </div>
    </div>
  );
}

function Menu() {
  return (
    <nav className="flex justify-center items-center w-full py-4 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg fixed top-4 mx-auto max-w-3xl">
      <div className="flex space-x-6">
        <a href="/" className="text-white hover:text-blue-400 px-4 py-2 rounded transition-colors duration-200 bg-gray-900 bg-opacity-75 hover:bg-opacity-100">Home</a>
        <a href="/tickets" className="text-white hover:text-blue-400 px-4 py-2 rounded transition-colors duration-200 bg-gray-900 bg-opacity-75 hover:bg-opacity-100">Tickets</a>
        <a href="/profile" className="text-white hover:text-blue-400 px-4 py-2 rounded transition-colors duration-200 bg-gray-900 bg-opacity-75 hover:bg-opacity-100">Profile</a>
      </div>
    </nav>
  );
}

export default Profile;
