import React, { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react'

import { Input } from 'antd'
import { Search } from 'lucide-react'
import { parseAsString, useQueryStates } from 'nuqs'

import { debounceFilter } from '@/utils/debounce'

import styles from './SearchInput.module.scss'

export function SearchInput() {
  const [filters, setFilters] = useQueryStates({
    name: parseAsString.withDefault(''),
  })

  const [localSearch, setLocalSearch] = useState(filters.name)

  useEffect(() => {
    setLocalSearch(filters.name)
  }, [filters.name])

  const updateSearchParams = useCallback(
    (value: string) => {
      setFilters({
        name: value.trim(),
      })
    },
    [setFilters],
  )

  const debouncedUpdateSearchParams = useMemo(() => debounceFilter(updateSearchParams, 500), [updateSearchParams])

  useEffect(() => {
    return () => {
      debouncedUpdateSearchParams.cancel()
    }
  }, [debouncedUpdateSearchParams])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalSearch(e.target.value)
    debouncedUpdateSearchParams(e.target.value)
  }

  return (
    <div className={styles.inputWrapper}>
      <Input
        placeholder="Informe o país que deseja conhecer..."
        suffix={<span className={styles.icon}><Search /></span>}
        onChange={handleChange}
        value={localSearch}
        allowClear
      />
    </div>
  )
}
