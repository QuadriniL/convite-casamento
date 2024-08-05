'use client';
import { BottomNavigation } from '@/components/bottomNavigation';
import { useCart } from '@/context/cart/CartContext';
import Image from 'next/image';

export default function ListaDePresentesPage() {
  const gifts = [
    {
      id: '1',
      image: 'https://via.placeholder.com/80',
      title: 'Jogo de Panelas',
      price: 150,
    },
    {
      id: '2',
      image: 'https://via.placeholder.com/80',
      title: 'Jogo de Panelas',
      price: 150,
    },
    {
      id: '3',
      image: 'https://via.placeholder.com/80',
      title: 'Jogo de Panelas',
      price: 150,
    },
    {
      id: '4',
      image: 'https://via.placeholder.com/80',
      title: 'Jogo de Panelas',
      price: 150,
    },
  ];

  const { addItem, removeItem, updateItemQuantity, items } = useCart();

  return (
    <>
      <main className='flex flex-col w-full h-full justify-start items-center'>
        <h1 className='text-3xl font-bold text-primary mt-6'>
          Lista de Presentes
        </h1>
        <ul className='text-primary flex justify-around w-10/12 mt-6'>
          <li>Diversão</li>
          <li>|</li>
          <li>Casa</li>
          <li>|</li>
          <li>Casamento</li>
        </ul>

        <section className='flex flex-wrap justify-center gap-4 w-12/12 mt-2'>
          {gifts.map((gift) => (
            <article
              key={gift.title}
              className='flex flex-col items-center gap-2 w-5/12 mt-4'
            >
              <div className='bg-primary-light w-full rounded-2xl py-6 flex justify-center'>
                <Image
                  src={gift.image}
                  alt={gift.title}
                  width={80}
                  height={80}
                  className='rounded-2xl object-cover'
                />
              </div>
              <h5 className='font-bold mt-2 text-primary'>{gift.title}</h5>
              {/* Divisor */}
              <div className='h-[1px] bg-primary-dark w-full mx-auto rounded-full'></div>
              <p className='text-primary font-semibold'>
                R$ {gift.price.toFixed(2)}
              </p>
              <div className='flex gap-1 items-center'>
                {items.find((item) => item.id === gift.id) && (
                  <button
                    className='text-2xl font-bold'
                    onClick={() => {
                      const item = items.find((item) => item.id === gift.id);

                      if (item?.quantity === 1) {
                        removeItem(gift.id);
                        return;
                      }

                      updateItemQuantity(gift.id, (item?.quantity || 0) - 1);
                    }}
                  >
                    -
                  </button>
                )}
                <button
                  className='bg-primary-dark text-[#FFF] font-bold rounded-full px-4 py-1 text-nowrap'
                  onClick={() =>
                    addItem({
                      id: gift.id,
                      name: gift.title,
                      quantity: 1,
                      price: gift.price,
                    })
                  }
                >
                  {items.find((item) => item.id === gift.id)?.quantity
                    ? items.find((item) => item.id === gift.id)?.quantity
                    : 'Presentear 🤍'}
                </button>
                {items.find((item) => item.id === gift.id) && (
                  <button
                    className='text-2xl font-semibold'
                    onClick={() => {
                      const item = items.find((item) => item.id === gift.id);

                      updateItemQuantity(gift.id, (item?.quantity || 0) + 1);
                    }}
                  >
                    +
                  </button>
                )}
              </div>
            </article>
          ))}
        </section>
      </main>
      <BottomNavigation />
    </>
  );
}
