import React, { useCallback, useEffect, useRef, useState } from "react"
import { ChainId, getChainName } from "@dcl/schemas"
import ClearRoundedIcon from "@mui/icons-material/ClearRounded"
import { Modal, Typography } from "@mui/material"
import { IconChain } from "../IconChain/IconChain"
import { useTabletAndBelowMediaQuery } from "../Media"
import {
  ChainNameIconMap,
  type ChainSelectorProps,
} from "./ChainSelector.types"
import {
  ChainButton,
  ChainSelectorCloseButton,
  ChainSelectorContainer,
  ChainSelectorModalTitleContainer,
  ChainSelectorWrapper,
  ConfirmLabel,
  ConnectedLabel,
  SelectorButton,
} from "./ChainSelector.styled"

export const ChainSelector = React.memo((props: ChainSelectorProps) => {
  const { chains, selectedChain, chainBeingConfirmed, i18n, onSelectChain } =
    props

  const chainBeingConfirmedRef = useRef(chainBeingConfirmed)
  const isMobileOrTablet = useTabletAndBelowMediaQuery()

  // This effect is used to close the modal when the chain being confirmed changes
  useEffect(() => {
    if (selectedChain && selectedChain === chainBeingConfirmedRef.current) {
      chainBeingConfirmedRef.current = undefined
      setShowModal(false)
    }
  }, [selectedChain])

  const [showModal, setShowModal] = useState(false)

  const title = i18n?.title || "Select Network"

  const onButtonClick = useCallback(() => {
    setShowModal(!showModal)
  }, [])

  const onSelectChainHandler = useCallback((chainId: ChainId) => {
    onSelectChain(chainId)
    chainBeingConfirmedRef.current = chainId
  }, [])

  return (
    <>
      <SelectorButton
        variant="contained"
        color="secondary"
        startIcon={<IconChain icon={ChainNameIconMap[selectedChain]} />}
        onClick={onButtonClick}
      >
        {!isMobileOrTablet
          ? selectedChain === ChainId.ETHEREUM_MAINNET
            ? "Ethereum"
            : getChainName(selectedChain)
          : null}
      </SelectorButton>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <ChainSelectorContainer elevation={1}>
          <ChainSelectorModalTitleContainer>
            {title && <Typography variant="h5">{title}</Typography>}

            <ChainSelectorCloseButton
              aria-label="close"
              size="large"
              onClick={() => setShowModal(false)}
            >
              <ClearRoundedIcon />
            </ChainSelectorCloseButton>
          </ChainSelectorModalTitleContainer>

          <ChainSelectorWrapper>
            {chains.map((chain) => {
              const chainName =
                chain === ChainId.ETHEREUM_MAINNET
                  ? "Ethereum"
                  : getChainName(chain)

              return (
                <ChainButton
                  key={chain}
                  variant="text"
                  color="secondary"
                  startIcon={<IconChain icon={ChainNameIconMap[chain]} />}
                  onClick={() => onSelectChainHandler(chain)}
                  isSelected={selectedChain === chain}
                >
                  {chainName}

                  {selectedChain === chain ? (
                    <ConnectedLabel>{i18n.connected}</ConnectedLabel>
                  ) : chainBeingConfirmed && chain === chainBeingConfirmed ? (
                    <ConfirmLabel>{i18n.confirmInWallet}</ConfirmLabel>
                  ) : null}
                </ChainButton>
              )
            })}
          </ChainSelectorWrapper>
        </ChainSelectorContainer>
      </Modal>
    </>
  )
})
