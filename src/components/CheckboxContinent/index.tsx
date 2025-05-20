import React, { useCallback, useMemo, useState } from 'react'

import { Checkbox, CheckboxOptionType } from 'antd'
import { parseAsString, useQueryStates } from 'nuqs'

import styles from './CheckboxContinent.module.scss'

export function CheckboxContinent() {
  const [queryParams, setQueryParams] = useQueryStates({
    region: parseAsString,
  })

  const [selectedValue, setSelectedValue] = useState<string | null>(queryParams.region ?? null)

  const options: CheckboxOptionType<string>[] = useMemo(() => [
    { label: <p className={styles['check-box-label']}>África</p>, value: 'Africa', className: 'label-1' },
    { label: <p className={styles['check-box-label']}>América do Norte</p>, value: 'North America', className: 'label-2' },
    { label: <p className={styles['check-box-label']}>América do Sul</p>, value: 'South America', className: 'label-3' },
    { label: <p className={styles['check-box-label']}>Ásia</p>, value: 'Asia', className: 'label-3' },
    { label: <p className={styles['check-box-label']}>Europa</p>, value: 'Europe', className: 'label-3' },
    { label: <p className={styles['check-box-label']}>Oceania</p>, value: 'Oceania', className: 'label-3' },
  ], [])

  const updateSearchParams = useCallback(
    (value: string[] | null) => {
      setQueryParams({
        ...queryParams,
        region: value && value.length > 0 ? value[0] : null,
      })

      if (!value) {
        return setSelectedValue(null)
      }

      if (value && selectedValue && value.includes(selectedValue)) {
        const next = value.find((item) => item !== selectedValue)
        return setSelectedValue(next as string)
      }

      setSelectedValue(value[0])

    },
    [queryParams, selectedValue, setQueryParams],
  )

  return (
    <Checkbox.Group options={options} onChange={updateSearchParams} value={[selectedValue] as string[]} className={styles['check-box-group']} />
  )
}
