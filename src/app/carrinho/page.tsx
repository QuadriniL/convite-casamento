'use client';

import CartCheckout from '@/components/CartCheckout';
import CartTotal from '@/components/CartTotal';
import { BottomNavigation } from '@/components/bottomNavigation';
import GiftRow from '@/components/giftRow';
import { useCart } from '@/context/cart/CartContext';

export default function CarrinhoDePresentesPage() {
  const gifts = [
    {
      image: 'https://via.placeholder.com/80',
      title: 'Jogo de Panelas 4',
      id: '4',
      price: 150,
    },
    {
      image: 'https://via.placeholder.com/80',
      title: 'Jogo de Panelas 3',
      id: '3',
      price: 150,
    },
    {
      image: 'https://via.placeholder.com/80',
      title: 'Jogo de Panelas 2',
      id: '2',
      price: 150,
    },
    {
      image: 'https://via.placeholder.com/80',
      title: 'Jogo de Panelas 1',
      id: '1',
      price: 150,
    },
  ];

  const { items, getTotalPrice } = useCart();

  return (
    <>
      <main className='mx-auto max-w-2xl p-4 h-full pb-40 '>
        <h1 className='text-3xl font-bold text-primary mt-6 text-center'>
          Meu Carrinho
        </h1>
        <div className='flex flex-col justify-between h-full'>
          <section className='overflow-y-auto pt-4'>
            {gifts
              .filter((gift) => items.find((item) => item.id === gift.id))
              .map((gift) =>
                GiftRow({
                  gift: {
                    ...gift,
                    quantity:
                      items.find((item) => item.id === gift.id)?.quantity || 1,
                  },
                })
              )}
          </section>
          <div>
            <CartTotal subtotal={getTotalPrice()} shipping={20} />
            <CartCheckout />
          </div>
        </div>
      </main>
      <BottomNavigation />
    </>
  );
}
