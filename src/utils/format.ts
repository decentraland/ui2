/**
 * Converts Wei to ETH
 * @param value - The value in Wei (as string or number)
 * @returns The value in ETH as a string
 */
export const formatEther = (value: string | number): string => {
  const wei = BigInt(value.toString())
  const eth = Number(wei) / 1e18
  return eth.toString()
}
