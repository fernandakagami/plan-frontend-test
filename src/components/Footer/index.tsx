import React from 'react'

import Image from 'next/image'

import styles from './Footer.module.scss'

export function Footer() {
  return (
    <footer className={styles['footer-container']}>
      <div className={styles['footer-wrapper']}>
        <Image src="/img/logo-group.png" alt="Logo da Plan Marketing" width={126} height={92} priority />

        <div className={styles['footer-copyright-container']}>
          <p className={styles['footer-copyright']}>Grupo Plan Marketing (C) Todos os direitos reservados - 2025</p>
        </div>
      </div>
    </footer>
  )
}
