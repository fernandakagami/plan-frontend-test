import React from 'react'

import Image from 'next/image'

import { CountryDetails } from '@/components/CountryDetails'

import styles from './Visualizar.module.scss'

export interface CountryDetailsPage {
	params: {
		name: string;
	};
}

export default async function CountryDetailsPage({ params }: CountryDetailsPage) {
  const { name } = await params

  return (
    <div className={styles.container}>
      <div className={styles['header-container']}>
        <div className={styles['image-container']}>
          <Image src="/img/white-logo.png" alt="Logo da Plan Marketing" width={120} height={80} priority />
        </div>
      </div>

      <CountryDetails name={name} />
    </div>
  )
}
