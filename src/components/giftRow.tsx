import { useCart } from '@/context/cart/CartContext';
import Image from 'next/image';
import React from 'react';

export default function GiftRow({ gift }: { gift: GiftProps }) {
  const { removeItem } = useCart();

  return (
    <div
      key={gift.id}
      className='flex items-center justify-between w-full pb-4'
    >
      <div className='flex'>
        <div className='bg-primary-light rounded-2xl py-2 px-2 flex justify-center items-center'>
          <Image
            src={gift.image}
            alt={gift.title}
            width={40}
            height={40}
            className='rounded-2xl object-cover'
          />
        </div>
        <div className='flex flex-col ml-2'>
          <h5 className='font-medium text-primary'>{gift.title}</h5>
          <p className='text-[#4B4544] font-normal text-sm'>
            {gift.quantity}x - R${(gift.price * gift.quantity).toFixed(2)}
          </p>
        </div>
      </div>
      <button
        onClick={() => {
          removeItem(gift.id);
        }}
        className='border-[#F4B5A4] border-solid border-2 text-[#FFF] font-bold rounded-full  text-nowrap'
      >
        🗑️
      </button>
    </div>
  );
}

export type GiftProps = {
  id: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
};
