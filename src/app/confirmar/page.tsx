import { BottomNavigation } from '@/components/bottomNavigation';
import Image from 'next/image';

export default function ConfirmarPresencaPage() {
  return (
    <>
      <main className='flex flex-col w-full h-full justify-start items-center'>
        <h1 className='text-2xl font-bold text-primary mt-6'>
          Confirme Sua Presença
        </h1>
        <div className='flex flex-col gap-1 w-10/12 mt-6'>
          <form className='flex flex-col gap-2'>
            <label htmlFor='nome'>Nome</label>
            <input
              type='text'
              id='nome'
              name='nome'
              className='rounded-full px-4 py-2 bg-primary-light'
            />
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              className='rounded-full px-4 py-2 bg-primary-light'
            />
            <label htmlFor='telefone'>Telefone</label>
            <input
              type='tel'
              id='telefone'
              name='telefone'
              className='rounded-full px-4 py-2 bg-primary-light'
            />
            <label htmlFor='mensagem'>Mensagem</label>
            <textarea
              id='mensagem'
              name='mensagem'
              className='rounded-lg px-4 py-2 bg-primary-light'
            />
            <label htmlFor='presente'>Voce irá ao evento?</label>
            <select
              id='presente'
              name='presente'
              className='rounded-full px-4 py-2 bg-primary-light'
            >
              <option value=''>Selecione</option>
              <option value='sim'>Sim</option>
              <option value='nao'>Não</option>
            </select>
            <button className='bg-primary-dark text-[#FFF] font-bold rounded-full px-4 py-2 mt-8'>
              Confirmar Presença
            </button>
          </form>
        </div>
      </main>
      <BottomNavigation />
    </>
  );
}
