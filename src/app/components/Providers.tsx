'use client'

import React, { Suspense } from 'react'
import { BilditProvider } from '@bildit-platform/nextjs'
import cmsDependencies from '@/app/utils/cmsDependencies'

interface ProvidersProps {
  children: React.ReactNode
  banners: any[]
}

export default function Providers({ children, banners }: ProvidersProps) {
  return (
    <Suspense>
      <BilditProvider banners={banners} extraDependenciesConfig={cmsDependencies}>
        {children}
      </BilditProvider>
    </Suspense>
  )
}
