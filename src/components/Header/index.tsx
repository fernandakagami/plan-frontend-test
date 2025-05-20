import React from 'react'

import Image from 'next/image'

import { CheckboxContinent } from '../CheckboxContinent'
import { LanguagesSelect } from '../LanguagesSelect'
import { SearchInput } from '../SearchInput'
import styles from './Header.module.scss'

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles['image-container']}>
        <Image src="/img/white-logo.png" alt="Logo da Plan Marketing" width={120} height={80} priority />
      </div>


      <div className={styles['search-wrapper']}>
        <div className={styles.search}>
          <SearchInput />

          <LanguagesSelect />
        </div>

        <CheckboxContinent />
      </div>
    </div>
  )
}
