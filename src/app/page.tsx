'use client'
import React from 'react'
import '@ant-design/v5-patch-for-react-19'

import { Header } from '@/components/Header'
import { ListCard } from '@/components/ListCard'

import styles from './Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <ListCard />
    </div>
  )
}
