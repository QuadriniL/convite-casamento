import Link from 'next/link';

const CartCheckout = () => {
  return (
    <div className='flex justify-center'>
      <Link
        href='/carrinho/checkout'
        className='bg-primary text-[#FFF] px-24 py-2 mt-4 rounded-full'
      >
        Confirmar
      </Link>
    </div>
  );
};

export default CartCheckout;
