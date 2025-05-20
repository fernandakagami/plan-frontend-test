'use client'

import React, { useMemo } from 'react'

import { Button, Card } from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { getCountry } from '@/services/country'
import { formatLanguages } from '@/utils/formatLanguages'
import { getContinentImage } from '@/utils/getContinent'
import { useQuery } from '@tanstack/react-query'

import { LoadingScreen } from '../LoadingScreen'
import styles from './CountryDetails.module.scss'

type TCountryDetails = {
  name: string;
}

export function CountryDetails({ name }: TCountryDetails) {
  const router = useRouter()

  const { data, isLoading } = useQuery({
    queryKey: ['get-country', name],
    queryFn: async () => await getCountry(name),
  })

  const dataFilterer = useMemo(() => {
    if (!data) return null

    return {
      official: data[0].translations.por.official,
      common: data[0].translations.por.common,
      flag: {
        svg: data[0].flags.svg,
        alt: data[0].flags.alt,
      },
      population: data[0].population,
      currency: Object.values(data[0].currencies as Record<string, { name: string }>)[0].name,
      capital: data[0].capital,
      languages: data[0].languages,
      region: data[0].region,
      subregion: data[0].subregion,
      continents: data[0].continents[0],
    }
  }, [data])

  const imageContinent = useMemo(() => {
    if (!dataFilterer) {
      return null
    }

    return getContinentImage(dataFilterer.continents)

  }, [dataFilterer])

  if (isLoading) {
    return (
      <LoadingScreen />
    )
  }

  return (
    <Card
      className={styles['card-container']}
      title={<span className={styles['card-title']}>{imageContinent?.name}</span>}
      variant="borderless"
      extra={imageContinent && imageContinent.image ? (
        <div className={styles['continent-image']}>
          <Image src={imageContinent?.image} alt={imageContinent?.name} width={imageContinent?.width} height={imageContinent?.height} />
        </div>
      ) : null}>
      <div className={styles['card-content']}>
        <div>
          <Image src={dataFilterer?.flag.svg} alt={dataFilterer?.flag.alt} width={290} height={220} />
          <p className={styles['flag-title']}>Bandeira</p>
        </div>


        <div className={styles['card-description']}>
          <p className={styles['country-name']}>{dataFilterer?.common}</p>

          <div className={styles['description-column']}>
            <p className={styles['description-title']}>
              <span>Nome oficial:</span>
              <span>Capital:</span>
              <span>População:</span>
              <span>Moeda:</span>
              <span>Idiomas:</span>
              <span>Região:</span>
              <span>Sub-Região:</span>
            </p>

            <p className={styles['description-details']}>
              <span className={styles['capital-name']}>{dataFilterer?.official}</span>
              <span className={styles['capital-name']}>{dataFilterer?.capital}</span>
              <span className={styles['capital-name']}>{dataFilterer?.population}</span>
              <span className={styles['capital-name']}>{dataFilterer?.currency}</span>
              <span className={styles['capital-name']}>{formatLanguages(dataFilterer?.languages)}</span>
              <span className={styles['capital-name']}>{dataFilterer?.region}</span>
              <span className={styles['capital-name']}>{dataFilterer?.subregion}</span>
            </p>
          </div>


          <Button type="primary" block onClick={() => router.push('/')} >
            <span className={styles['button-title']}>
              Ver mais
            </span>
          </Button>
        </div>

      </div>
    </Card>
  )
}
