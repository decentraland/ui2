/** Format a number with commas (e.g. 1234 -> "1,234"). */
export function formatBalance(value: number): string {
  return Math.floor(value).toLocaleString('en-US')
}
