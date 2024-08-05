import CartCheckout from '@/components/CartCheckout';

export default function CartCheckoutPage() {
  const { items } = {
    items: [
      {
        image: '/images/gift1.png',
        title: 'Gift 1',
        quantity: 1,
        price: 10,
      },
      {
        image: '/images/gift2.png',
        title: 'Gift 2',
        price: 20,
        quantity: 2,
      },
    ],
  };

  return (
    <main className='h-full'>
      <h1 className='text-3xl font-bold text-primary mt-6 text-center'>
        Meu Carrinho
      </h1>
      <section className='px-4 h-full'>
        <div className='flex justify-between'>
          <h3 className='text-contrast font-bold text-lg'>Items</h3>
          <span>{items.length}</span>
        </div>
        <div className='flex justify-between'>
          <h3 className='text-contrast font-bold text-lg'>Total</h3>
          <span>
            R$
            {items
              .reduce((acc, item) => acc + item.price * item.quantity, 0)
              .toFixed(2)}
          </span>
        </div>
      </section>
      <section className='flex flex-col bg-primary-lightest px-8'>
        <h2 className='font-cursive text-center mt-4'>
          Deixe uma mensagem de carrinho para os noivos
        </h2>
        <label>Seu Nome</label>
        <input type='text' />
        <label>Sua Mensagem</label>
        <textarea></textarea>
        <CartCheckout />
      </section>
    </main>
  );
}
