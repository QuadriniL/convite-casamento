const CartTotal = ({ subtotal }: CartTotalProps) => {
  return (
    <div className='border-t border-gray-200 py-4 border-dashed'>
      <div className='flex justify-between mt-2 font-bold'>
        <span className='text-[#282828]'>Total:</span>
        <span className='font-normal'>R$ {subtotal.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartTotal;
export interface CartTotalProps {
  subtotal: number;
  shipping?: number;
}
