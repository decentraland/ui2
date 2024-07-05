const neutral = {
  white: `#FFFFFF`,
  softWhite: `#FCFCFC`,
  gray5: `#ECEBED`,
  gray4: `#CFCDD4`,
  gray3: `#A09BA8`,
  gray2: `#716B7C`,
  gray1: `#5E5B67`,
  gray0: `#43404A`,
  softBlack2: `#242129`,
  softBlack1: `#161518`,
  black: `#000000`,
}

const textOnNeutral: typeof neutral = {
  white: neutral.softBlack2,
  softWhite: neutral.softBlack2,
  gray5: neutral.softBlack2,
  gray4: neutral.softBlack2,
  gray3: neutral.white,
  gray2: neutral.white,
  gray1: neutral.white,
  gray0: neutral.white,
  softBlack2: neutral.white,
  softBlack1: neutral.white,
  black: neutral.white,
}

const base = {
  primary: "#FF2D55",
  primaryLight2: `#FFD8DF`,
  primaryLight1: `#FFBFCB`,
  primaryDark: `#DF1F43`,
  primaryAlt: `#FF7439`,
}

const textOnBase: typeof base = {
  primary: neutral.white,
  primaryLight2: neutral.black,
  primaryLight1: neutral.black,
  primaryDark: neutral.white,
  primaryAlt: neutral.white,
}

const state = {
  success: `#34CE76`,
  successDark: `#279E5A`,
  warning: `#FFC95B`,
  warningDark: `#E9AB2E`,
  error: `#FB3B3B`,
  errorDark: `#DA2828`,
}

const textOnState: typeof state = {
  success: neutral.white,
  successDark: neutral.white,
  warning: neutral.softBlack2,
  warningDark: neutral.softBlack2,
  error: neutral.white,
  errorDark: neutral.white,
}

const rarity = {
  common: `#73D3D3`,
  uncommon: `#FF8362`,
  rare: `#34CE76`,
  epic: `#438FFF`,
  legendary: `#A14BF3`,
  mythic: `#FF4BED`,
  unique: `#FEA217`,
}

const rarityLight: typeof rarity = {
  common: `#D2F9F9`,
  uncommon: `#F9E4DF`,
  rare: `#C1F2D6`,
  epic: `#C0D3EF`,
  legendary: `#E1C1FF`,
  mythic: `#FDC4F7`,
  unique: `#F3E5CF`,
}

const rarityGradient: typeof rarity = {
  common: `radial-gradient(circle, ${rarityLight.common} 0%, ${rarity.common} 100%)`,
  uncommon: `radial-gradient(circle, ${rarityLight.uncommon} 0%, ${rarity.uncommon} 100%)`,
  rare: `radial-gradient(circle, ${rarityLight.rare} 0%, ${rarity.rare} 100%)`,
  epic: `radial-gradient(circle, ${rarityLight.epic} 0%, ${rarity.epic} 100%)`,
  legendary: `radial-gradient(circle, ${rarityLight.legendary} 0%, ${rarity.legendary} 100%)`,
  mythic: `radial-gradient(circle, ${rarityLight.mythic} 0%, ${rarity.mythic} 100%)`,
  unique: `radial-gradient(circle, ${rarityLight.unique} 0%, ${rarity.unique} 100%)`,
}

const textOnRarity: typeof rarity = {
  common: neutral.white,
  uncommon: neutral.white,
  rare: neutral.white,
  epic: neutral.white,
  legendary: neutral.white,
  mythic: neutral.white,
  unique: neutral.white,
}

const brand = {
  yellow: `#FFBC5B`,
  melon: `#FFA25A`,
  orange: `#FF7439`,
  ruby: `#FF2D55`,
  lavander: `#C640CD`,
  voilet: `#A524B3`,
  purpel: `#691FA9`,
}

const textOnBrand: typeof brand = {
  yellow: neutral.softBlack2,
  melon: neutral.softBlack2,
  orange: neutral.white,
  ruby: neutral.white,
  lavander: neutral.white,
  voilet: neutral.white,
  purpel: neutral.white,
}

const gradient = {
  ...rarityGradient,
  flare: `linear-gradient(135deg, ${brand.ruby} 0%, ${brand.yellow} 100%)`,
  cerise: `linear-gradient(135deg, ${brand.ruby} 0%, ${brand.lavander} 100%)`,
  amin: `linear-gradient(135deg, ${brand.lavander} 0%, ${brand.purpel} 100%)`,
}

const textOnGradient: typeof gradient = {
  ...textOnRarity,
  flare: neutral.white,
  cerise: neutral.white,
  amin: neutral.white,
}

const opacity = {
  backdrop: 0.6,
  blurry: 0.4,
  soft: 0.2,
  subtle: 0.1,
}

const blackTransparent = {
  backdrop: `rgba(0, 0, 0, ${opacity.backdrop})`,
  blurry: `rgba(0, 0, 0, ${opacity.blurry})`,
  soft: `rgba(0, 0, 0, ${opacity.soft})`,
  subtle: `rgba(0, 0, 0, ${opacity.subtle})`,
}

const textOnBlackTransparent: typeof blackTransparent = {
  backdrop: neutral.white,
  blurry: neutral.white,
  soft: neutral.black,
  subtle: neutral.black,
}

const whiteTransparent: typeof blackTransparent = {
  backdrop: `rgba(255, 255, 255, ${opacity.backdrop})`,
  blurry: `rgba(255, 255, 255, ${opacity.blurry})`,
  soft: `rgba(255, 255, 255, ${opacity.soft})`,
  subtle: `rgba(255, 255, 255, ${opacity.subtle})`,
}

const textOnWhiteTransparent: typeof blackTransparent = {
  backdrop: neutral.softBlack2,
  blurry: neutral.softBlack2,
  soft: neutral.softBlack2,
  subtle: neutral.softBlack2,
}

export {
  neutral,
  textOnNeutral,
  base,
  textOnBase,
  state,
  textOnState,
  rarity,
  rarityGradient,
  textOnRarity,
  brand,
  textOnBrand,
  gradient,
  textOnGradient,
  opacity,
  blackTransparent,
  textOnBlackTransparent,
  whiteTransparent,
  textOnWhiteTransparent,
}
