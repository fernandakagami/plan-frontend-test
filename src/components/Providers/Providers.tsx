'use client'

import React from 'react'
import { Provider } from 'react-redux'

import { ConfigProvider } from 'antd'
import { NuqsAdapter } from 'nuqs/adapters/next/app'

import { andtTheme } from '@/constants/antd-theme'
import ReactQueryProvider from '@/context/queryClient'
import { store } from '@/store'
import { AntdRegistry } from '@ant-design/nextjs-registry'


export function Providers({ children }: { children: React.ReactNode }) {
  return (
  	<NuqsAdapter>
      <ReactQueryProvider>
        <ConfigProvider theme={andtTheme}>
          <AntdRegistry>
            <Provider store={store}>{children}</Provider>
          </AntdRegistry>
        </ConfigProvider>
      </ReactQueryProvider>
    </NuqsAdapter>
  )

}
