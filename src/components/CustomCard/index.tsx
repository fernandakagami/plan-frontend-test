import React, { useMemo } from 'react'

import { Button, Card } from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { getContinentImage } from '@/utils/getContinent'

import styles from './CustomCard.module.scss'

export function CustomCard({ item }: { item: any }) {
  const router = useRouter()

  const imageContinent = useMemo(() => {
    return getContinentImage(item.continents[0])
  }, [item.continents])

  return (
    <Card
      title={<span className={styles['card-title']}>{imageContinent?.name}</span>}
      variant="borderless"
      extra={imageContinent.image ? (
        <div className={styles['continent-image']}>
          <Image src={imageContinent?.image} alt={imageContinent?.name} width={imageContinent?.width} height={imageContinent?.height} />
        </div>
      ) : null}>
      <div className={styles['card-content']}>
        <Image src={item.flag.svg} alt={item.flag.alt} width={24} height={18} />

        <p className={styles['country-name']}>{item.name}</p>

        <p className={styles['capital-content']}>
          <Image src="/img/capital-icon.png" alt="icone-capital" width={20} height={20} />
          <span className={styles['capital-name']}>{item.capital}</span>
        </p>

        <Button type="primary" block onClick={() => router.push(`/${item.name}/visualizar`)} >
          <span className={styles['button-title']}>
              Ver mais
          </span>
        </Button>
      </div>
    </Card>
  )
}
