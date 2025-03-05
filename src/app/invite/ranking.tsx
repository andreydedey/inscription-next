import Image from "next/image"

import bronze from '../../assets/Medal_bronze.svg'
import silver from '../../assets/Medal_silver.svg'
import gold from '../../assets/Medal_gold.svg'

export function Ranking() {

  return (
    <div className='w-full max-w-[440px] space-y-5'>
      <h2 className="text-gray-200 text-xl font-heading font-semibold leadind-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col gap-3">
          <span className='textsm text-gray-300 leading-none'>
            <span className='font-semibold'>1º</span>
            Diego Fernandes
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">1030</span>

          <Image src={gold} alt='gold_medal' className='absolute top-0 right-8' />
        </div>

        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col gap-3">
          <span className='textsm text-gray-300 leading-none'>
            <span className='font-semibold'>1º</span>
            Diego Fernandes
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">1030</span>

          <Image src={silver} alt='gold_medal' className='absolute top-0 right-8' />
        </div>

        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col gap-3">
          <span className='textsm text-gray-300 leading-none'>
            <span className='font-semibold'>1º</span>
            Diego Fernandes
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">1030</span>

          <Image src={bronze} alt='gold_medal' className='absolute top-0 right-8' />
        </div>
      </div>
    </div>
  )

}