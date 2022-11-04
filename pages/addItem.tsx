import React from 'react';
import Header from '../components/Header';
import { useContract, useAddress } from "@thirdweb-dev/react";

type Props = {}

function addItem({}: Props) {
    const address = useAddress();

    const { contract } = useContract(
        process.env.NEXT_PUBLIC_COLLETCTION_CONTRACT,
        "nft-collection"
    );

  return (
    <div>
        <Header />

        <main className='max-w-6xl mx-auto p-10 border'>
            <h1 className='text-4xl font-bold'>Add an Item to the Marketplace</h1>
            <h2 className='text-xl font-semibold pt-5'>Item Details</h2>
            <p className='pb-5'>
                By adding an item to the marketplace, you're essentially Minting an NFT of the item into your wallet which we can then list for sale!
            </p>

            <div className='flex flex-col justify-center items-center md:flex-row md:space-x-5 pt-5'>
                <img className='border h-80 w-80 object-contain' src="https://links.papareact.com/ucj" alt="" />

                <form className='flex flex-col flex-1 p-2 space-y-2 justify-center'>
                    <label className='font-light'>Name of Item</label>
                    <input className='formField' type="text" placeholder='Name of item...'/>

                    <label className='font-light'>Description</label>
                    <input className='formField' type="text" placeholder='Enter Description...' />

                    <label className='font-light'>Image of the Item</label>
                    <input type="file" />

                    <button className='bg-blue-600 font-bold text-white rounded-full py-4 px-10 w-56 mt-auto mx-auto md:ml-auto'>Add/Mint Item</button>
                </form>
            </div>
        </main>
    </div>
  )
}

export default addItem;