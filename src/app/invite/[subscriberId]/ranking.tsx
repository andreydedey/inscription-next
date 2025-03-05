import Image from "next/image"

import bronze from '../../../assets/Medal_bronze.svg'
import silver from '../../../assets/Medal_silver.svg'
import gold from '../../../assets/Medal_gold.svg'
import { getRanking } from "@/http/api"

export async function Ranking() {

  const { ranking } = await getRanking()

  return (
    <div className='w-full max-w-[440px] space-y-5'>
      <h2 className="text-gray-200 text-xl font-heading font-semibold leadind-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {ranking.map((item, index) => {
          const rankingPosition = index + 1

          return (
            <div key={item.id} className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col gap-3">
              <span className='textsm text-gray-300 leading-none'>
                <span className='font-semibold'>{rankingPosition}º</span>
                {item.name}
              </span>

              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">{item.score}</span>

              {rankingPosition === 1 && <Image src={gold} alt='gold_medal' className='absolute top-0 right-8' />}
              {rankingPosition === 2 && <Image src={gold} alt='gold_medal' className='absolute top-0 right-8' />}
              {rankingPosition === 3 && <Image src={gold} alt='gold_medal' className='absolute top-0 right-8' />}
            </div>
          )
        })}
      </div>
    </div>
  )

}