import React, { useMemo } from 'react'

import { Button, List } from 'antd'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { CountryProps } from '@/@types/countryProps'
import { useCountyListFilters } from '@/hooks/useCountryListFilters'
import { getAllCountry } from '@/services/country/countryService'
import { useQuery } from '@tanstack/react-query'

import { CustomCard } from '../CustomCard'
import { LoadingScreen } from '../LoadingScreen'
import styles from './ListCard.module.scss'

export function ListCard() {
  const [queryParams] = useCountyListFilters()

  const { data, isLoading } = useQuery({
    queryKey: ['country-list', queryParams],
    queryFn: async () => await getAllCountry(queryParams),
  })

  const dataFilterer = useMemo(() => {
    if (!data) return []

    return data.map((item: CountryProps) => {
      return {
        name: item.translations.por.common,
        flag: {
          svg: item.flags.svg,
          alt: item.flags.alt,
        },
        capital: item.capital,
        continents: item.continents,
      }
    })
  }, [data])

  if (isLoading) {
    <LoadingScreen />
  }

  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 1,
        md: 2,
        lg: 3,
        xl: 3,
        xxl: 4,
      }}
      itemLayout="horizontal"
      className={styles['list-container']}
      dataSource={dataFilterer}
      pagination={{
        pageSize: 6,
        align: 'center',
        showSizeChanger: false,
        itemRender: (current, type) => {
          if (type === 'prev') {
            return <Button type="primary" className={styles['action-button']}>
              <ChevronLeft size={20} />
            </Button>
          }

          if (type === 'page') {
            return <Button className={styles['page-button']}>
            </Button>
          }

          if (type === 'next') {
            return <Button type="primary" className={styles['action-button']}>
              <ChevronRight size={20} />
            </Button>
          }
        }
      }}
      renderItem={item => (
        <List.Item>
          <CustomCard item={item} />
        </List.Item>
      )}
    />
  )
}
