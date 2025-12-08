import { memo } from "react"
import { SceneRowProps } from "./SceneRow.types"
import { SceneName, SceneRowContainer, SceneThumbnail } from "./SceneRow.styled"

const SceneRow = memo((props: SceneRowProps) => {
  const { name, thumbnail } = props

  return (
    <SceneRowContainer>
      <SceneThumbnail src={thumbnail} alt={name} />
      <SceneName>{name}</SceneName>
    </SceneRowContainer>
  )
})

SceneRow.displayName = "SceneRow"

export { SceneRow }
