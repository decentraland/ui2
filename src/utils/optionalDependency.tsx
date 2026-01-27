import React, { ComponentType, Suspense } from 'react'

type OptionalDependencyConfig = {
  packageName: string
  componentName: string
}

class OptionalDependencyError extends Error {
  constructor(config: OptionalDependencyConfig) {
    super(
      `The "${config.componentName}" component requires "${config.packageName}" to be installed. ` +
        `Please install it by running: npm install ${config.packageName}`
    )
    this.name = 'OptionalDependencyError'
  }
}

function createDynamicImport<TModule = unknown>(moduleName: string) {
  return () => {
    // Split base package from subpath to keep the dynamic import specific
    // (works with scoped packages and avoids a broad context import).
    const parts = moduleName.split('/')
    const base = parts[0]
    const rest = parts.slice(1).join('/')
    const dynamicModule = rest ? `${base}/${rest}` : base
    return import(/* webpackMode: "lazy" */ dynamicModule) as Promise<TModule>
  }
}

function createLazyComponent<P extends object>(
  config: OptionalDependencyConfig,
  importFn: () => Promise<{ default: ComponentType<P> }>,
  fallback: React.ReactNode = null
): React.FC<P> {
  const LazyComponent = React.lazy(() =>
    importFn().catch(error => {
      if (
        error?.code === 'MODULE_NOT_FOUND' ||
        error?.message?.includes('Cannot resolve module') ||
        error?.message?.includes("Can't resolve")
      ) {
        throw new OptionalDependencyError(config)
      }
      throw error
    })
  ) as unknown as React.FC<P>

  const WrappedComponent: React.FC<P> = props => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  )

  WrappedComponent.displayName = `Lazy${config.componentName}`

  return WrappedComponent
}

export { createLazyComponent, OptionalDependencyError, createDynamicImport }
