import Link from 'next/link';

export function BottomNavigation() {
  return (
    <footer className='fixed bottom-0 flex justify-center items-center w-screen h-16 bg-primary-dark text-primary-light'>
      <nav className='flex gap-4 *:w-full w-full justify-center'>
        <Link href='/presentes' className='flex flex-col items-center'>
          <p>🎁</p>
          <p>Presentes</p>
        </Link>
        <Link href='/carrinho' className='flex flex-col items-center'>
          <p>🛒</p>
          <p>Carrinho</p>
        </Link>
        <Link href='/confirmar' className='flex flex-col items-center'>
          <p>🎉</p>
          <p>Confirmar</p>
        </Link>
      </nav>
    </footer>
  );
}
