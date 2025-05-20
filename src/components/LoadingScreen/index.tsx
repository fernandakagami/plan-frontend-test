import React from 'react'

import { Spin } from 'antd'

import styles from './LoadingScreen.module.scss'

export function LoadingScreen() {
  return (
    <div className={styles['loading-screen']}>
      <Spin size="large" tip={<div className="mt-2 text-lg">Carregando...</div>}>
      </Spin>
    </div>
  )
}
