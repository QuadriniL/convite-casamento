import CartTotal from '@/components/CartTotal';

export default function PaymentPage() {
  return (
    <main>
      <h1>Fazer Pagamento</h1>
      <section className='flex flex-col *:justify-between *:flex'>
        <div>
          <label htmlFor='credit'>Cartão de Crédito</label>
          <input type='radio' id='credit' name='payment' />
        </div>
        <div>
          <label htmlFor='pix'>PIX</label>
          <input type='radio' id='pix' name='payment' />
        </div>
      </section>
      <CartTotal subtotal={300} />
    </main>
  );
}
