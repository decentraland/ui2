import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { PreviewMessagePayload, PreviewMessageType, PreviewOptions, sendMessage } from '@dcl/schemas/dist/dapps/preview'
import equal from 'deep-equal'
import { createController } from './WearablePreview.controller'
import { config } from '../../config'
import { createDebounce } from '../../lib/debounce'
import { WearablePreviewProps, WearablePreviewState } from './WearablePreview.types'
import { StyledWearablePreview } from './WearablePreview.styled'

const debounce = createDebounce()

const safeEncodeParam = (key: string, value: unknown): string => {
  if (value === undefined || value === null || value === '') {
    return ''
  }

  // Handle arrays
  if (Array.isArray(value)) {
    return value.length > 0 ? value.map(item => `${key}=${encodeURIComponent(String(item))}`).join('&') : ''
  }

  // Handle all other values (strings, numbers, booleans, objects, etc.)
  return `${key}=${encodeURIComponent(String(value))}`
}

const WearablePreview = (props: WearablePreviewProps) => {
  const {
    dev = false,
    baseUrl = config.get('WEARABLE_PREVIEW_URL'),
    unity = false,
    onLoad = () => {},
    onError = () => {},
    onUpdate = () => {},
    ...restProps
  } = props

  const [state, setState] = useState<WearablePreviewState>({
    isReady: false,
    pendingOptions: null
  })

  const iframeRef = useRef<HTMLIFrameElement>(null)
  const lastOptionsRef = useRef<PreviewOptions | null>(null)

  const url = useMemo(() => {
    const {
      contractAddress,
      tokenId,
      itemId,
      profile,
      urns,
      urls,
      base64s,
      skin,
      hair,
      eyes,
      bodyShape,
      emote,
      camera,
      projection,
      zoom,
      background,
      offsetX,
      offsetY,
      offsetZ,
      cameraX,
      cameraY,
      cameraZ,
      wheelZoom,
      wheelPrecision,
      wheelStart,
      disableBackground,
      disableAutoRotate,
      disableAutoCenter,
      disableFace,
      disableDefaultWearables,
      disableDefaultEmotes,
      disableFadeEffect,
      showSceneBoundaries,
      showThumbnailBoundaries,
      panning,
      lockAlpha,
      lockBeta,
      lockRadius,
      peerUrl,
      nftServerUrl,
      marketplaceServerUrl,
      type,
      unityMode,
      username,
      socialEmote
    } = restProps

    const contractParam = safeEncodeParam('contract', contractAddress)
    const tokenParam = safeEncodeParam('token', tokenId)
    const itemParam = safeEncodeParam('item', itemId)
    const profileParam = safeEncodeParam('profile', profile)
    const urnParams = safeEncodeParam('urn', urns)
    const urlsParams = safeEncodeParam('url', urls)
    const base64sParams = safeEncodeParam('base64', base64s)
    const skinParam = safeEncodeParam('skin', skin)
    const hairParam = safeEncodeParam('hair', hair)
    const eyesParam = safeEncodeParam('eyes', eyes)
    const bodyShapeParam = safeEncodeParam('bodyShape', bodyShape)
    const emoteParam = safeEncodeParam('emote', emote)
    const cameraParam = safeEncodeParam('camera', camera)
    const projectionParam = safeEncodeParam('projection', projection)
    const zoomParam = safeEncodeParam('zoom', zoom)
    const backgroundParam = safeEncodeParam('background', background)
    const offsetXParam = safeEncodeParam('offsetX', offsetX)
    const offsetYParam = safeEncodeParam('offsetY', offsetY)
    const offsetZParam = safeEncodeParam('offsetZ', offsetZ)
    const cameraXParam = safeEncodeParam('cameraX', cameraX)
    const cameraYParam = safeEncodeParam('cameraY', cameraY)
    const cameraZParam = safeEncodeParam('cameraZ', cameraZ)
    const wheelZoomParam = safeEncodeParam('wheelZoom', wheelZoom)
    const wheelPrecisionParam = safeEncodeParam('wheelPrecision', wheelPrecision)
    const wheelStartParam = safeEncodeParam('wheelStart', wheelStart)
    const disableBackgroundParam = safeEncodeParam('disableBackground', disableBackground)
    const disableAutoRotateParam = safeEncodeParam('disableAutoRotate', disableAutoRotate)
    const disableAutoCenterParam = safeEncodeParam('disableAutoCenter', disableAutoCenter)
    const disableFaceParam = safeEncodeParam('disableFace', disableFace)
    const disableDefaultWearablesParam = safeEncodeParam('disableDefaultWearables', disableDefaultWearables)
    const disableDefaultEmotesParam = safeEncodeParam('disableDefaultEmotes', disableDefaultEmotes)
    const disableFadeEffectParam = safeEncodeParam('disableFadeEffect', disableFadeEffect)
    const showSceneBoundariesParam = safeEncodeParam('showSceneBoundaries', showSceneBoundaries)
    const showThumbnailBoundariesParam = safeEncodeParam('showThumbnailBoundaries', showThumbnailBoundaries)
    const peerUrlParam = safeEncodeParam('peerUrl', peerUrl)
    const serverUrl = marketplaceServerUrl ?? nftServerUrl
    const marketplaceServerUrlParam = safeEncodeParam('marketplaceServerUrl', serverUrl)
    const typeParam = safeEncodeParam('type', type)
    const panningParam = safeEncodeParam('panning', panning)
    const lockAlphaParam = safeEncodeParam('lockAlpha', lockAlpha)
    const lockBetaParam = safeEncodeParam('lockBeta', lockBeta)
    const lockRadiusParam = safeEncodeParam('lockRadius', lockRadius)
    const envParam = safeEncodeParam('env', dev ? 'dev' : undefined)
    const unityParam = safeEncodeParam('unity', unity)
    const unityModeParam = safeEncodeParam('mode', unityMode)
    const usernameParam = safeEncodeParam('username', username)
    const socialEmoteParam = safeEncodeParam('socialEmote', socialEmote)

    const url =
      baseUrl +
      '?' +
      [
        contractParam,
        tokenParam,
        itemParam,
        profileParam,
        urnParams,
        urlsParams,
        base64sParams,
        skinParam,
        hairParam,
        eyesParam,
        bodyShapeParam,
        emoteParam,
        cameraParam,
        projectionParam,
        zoomParam,
        backgroundParam,
        offsetXParam,
        offsetYParam,
        offsetZParam,
        cameraXParam,
        cameraYParam,
        cameraZParam,
        wheelZoomParam,
        wheelPrecisionParam,
        wheelStartParam,
        disableBackgroundParam,
        disableAutoRotateParam,
        disableAutoCenterParam,
        disableFaceParam,
        disableDefaultWearablesParam,
        disableDefaultEmotesParam,
        disableFadeEffectParam,
        showSceneBoundariesParam,
        showThumbnailBoundariesParam,
        peerUrlParam,
        marketplaceServerUrlParam,
        typeParam,
        panningParam,
        lockAlphaParam,
        lockBetaParam,
        lockRadiusParam,
        envParam,
        unityParam,
        unityModeParam,
        usernameParam,
        socialEmoteParam
      ]
        .filter(param => !!param)
        .join('&')
    return url
  }, [restProps, baseUrl, dev, unity])

  const options = useMemo(() => {
    const opts: PreviewOptions = {}

    for (const key in restProps) {
      if (typeof restProps[key] !== 'function') {
        opts[key] = restProps[key]
      }
    }

    return opts
  }, [restProps])

  const sendUpdate = useCallback(
    (options: PreviewOptions) => {
      // Use ref for lastOptions to avoid re-renders
      const currentLastOptions = lastOptionsRef.current

      // only send update if new options are different
      if (!currentLastOptions || !equal(options, currentLastOptions)) {
        // send message to iframe
        if (iframeRef.current?.contentWindow) {
          sendMessage(iframeRef.current.contentWindow, PreviewMessageType.UPDATE, {
            options
          })
        }
        // callback
        onUpdate(options)

        // Always store in ref to avoid re-renders
        lastOptionsRef.current = options
      }
    },
    [onUpdate]
  )

  const handleUpdate = useCallback(() => {
    if (iframeRef.current) {
      // SSR check
      if (typeof window !== 'undefined') {
        if (state.isReady) {
          // if the iframe is ready, send the update
          sendUpdate(options)
        } else if (!equal(state.pendingOptions, options)) {
          // otherwise store last update in state until it's ready
          setState(prev => ({ ...prev, pendingOptions: options, url }))
        }
      }
    } else {
      console.warn(`Could not send update, iframe is not referenced`)
    }
  }, [options, state.pendingOptions, state.isReady, sendUpdate])

  const handleMessage = useCallback(
    (event: MessageEvent) => {
      const { origin } = event
      if (origin !== baseUrl || !event.data?.type) return

      const type: PreviewMessageType = event.data.type
      switch (type) {
        case PreviewMessageType.LOAD: {
          const payload = event.data.payload as PreviewMessagePayload<PreviewMessageType.LOAD>
          onLoad(payload?.renderer)
          break
        }
        case PreviewMessageType.ERROR: {
          const payload = event.data.payload as PreviewMessagePayload<PreviewMessageType.ERROR>
          onError(new Error(payload.message))
          break
        }
        case PreviewMessageType.READY: {
          setState(prev => {
            if (prev.isReady) return prev

            if (prev.pendingOptions !== null) {
              sendUpdate(prev.pendingOptions)
              return {
                ...prev,
                isReady: true,
                pendingOptions: null
              }
            }

            return { ...prev, isReady: true }
          })
          break
        }
        default:
        // do nothing
      }
    },
    [baseUrl, onLoad, onError, sendUpdate]
  )

  useEffect(() => {
    window.addEventListener('message', handleMessage, false)
    return () => {
      window.removeEventListener('message', handleMessage, false)
    }
  }, [handleMessage])

  useEffect(() => {
    // if there's a blob in the props, it can't be passed via URL, so we send it via postMessage
    if (props.blob) {
      handleUpdate()
    }
  }, [props.blob, handleUpdate])

  useEffect(() => {
    debounce(handleUpdate, 500)
  }, [handleUpdate])

  if (props.tokenId && props.itemId) {
    console.warn('You should NOT use `tokenId` and `itemId` props simultaneously')
  }

  return <StyledWearablePreview id={props.id} src={url} ref={iframeRef} allow="autoplay" />
}

WearablePreview.createController = createController

export { WearablePreview }
