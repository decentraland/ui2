import React, { ComponentType, Suspense } from "react"

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
    this.name = "OptionalDependencyError"
  }
}

function createLazyComponent<P extends object>(
  config: OptionalDependencyConfig,
  importFn: () => Promise<{ default: ComponentType<P> }>,
  fallback: React.ReactNode = null
): React.FC<P> {
  const LazyComponent = React.lazy(() =>
    importFn().catch(() => {
      throw new OptionalDependencyError(config)
    })
  ) as unknown as React.FC<P>

  const WrappedComponent: React.FC<P> = (props) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  )

  WrappedComponent.displayName = `Lazy${config.componentName}`

  return WrappedComponent
}

export { createLazyComponent, OptionalDependencyError }
