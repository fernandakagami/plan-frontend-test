'use client'
import React, { FC, PropsWithChildren, useState } from 'react'

import { QueryClient, QueryClientConfig, QueryClientProvider } from '@tanstack/react-query'

const queryClientOptions: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 0,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
    },
  },
}

const ReactQueryProvider: FC<PropsWithChildren> = ({ children }) => {
  const [queryClientStore] = useState(() => new QueryClient(queryClientOptions))

  return <QueryClientProvider client={queryClientStore}>{children}</QueryClientProvider>
}

export default ReactQueryProvider
