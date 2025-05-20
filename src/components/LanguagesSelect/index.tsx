'use client'

import React, { useCallback, useEffect, useMemo } from 'react'

import { Select } from 'antd'
import { ChevronDown } from 'lucide-react'
import { parseAsString, useQueryStates } from 'nuqs'

import { getLanguages } from '@/services/country'
import { debounceFilter } from '@/utils/debounce'
import { useQuery } from '@tanstack/react-query'

import styles from './LanguagesSelect.module.scss'

export function  LanguagesSelect() {
  const [queryParams, setQueryParams] = useQueryStates({
    language: parseAsString.withDefault(''),
  })

  const { data, isLoading } = useQuery({
    queryKey: ['languagues-list'],
    queryFn: async () => getLanguages()
  })

  const options = useMemo(() => {
    if (data == null) {
      return undefined
    }

    const languageMap = new Map()

    data.forEach((country: any) => {
      const languages = country.languages

      for (const [code, name] of Object.entries(languages)) {
        if (!languageMap.has(code)) {
          languageMap.set(code, {
            value: code,
            label: name
          })
        }
      }
    })

    return Array.from(languageMap.values())
  }, [data])

  const updateSearchParams = useCallback(
    (value: string | null) => {
      setQueryParams({
        ...queryParams,
        language: value ?? null,
      })
    },
    [queryParams, setQueryParams],
  )

  const debouncedUpdateSearchParams = useMemo(() => debounceFilter(updateSearchParams, 500), [updateSearchParams])

  useEffect(() => {
    return () => {
      debouncedUpdateSearchParams.cancel()
    }
  }, [debouncedUpdateSearchParams])

  return (
    <Select
      loading={isLoading}
      className={styles.select}
      suffixIcon={<ChevronDown color="white" />}
      defaultValue={queryParams.language ?? null}
      onChange={(value) => {
        updateSearchParams(value)
      }}
      options={options}
      placeholder={<p className={styles['select-placeholder']}>Selecione o idioma</p>}
      allowClear
    />
  )
}


