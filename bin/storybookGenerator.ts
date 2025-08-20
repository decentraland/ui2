import * as fs from "fs"
import * as path from "path"
import {
  complexGenericComponents,
  componentsConfig,
  componentsThatNeedReactElements,
  documentComponents,
  problematicComponents,
} from "./muiComponentConfig.tsx"
import {
  complexGenericComponentTemplate,
  componentTemplate,
  problematicComponentTemplate,
  storiesJustArgsTemplate,
  storiesTemplate,
} from "./templates.ts"

const FOLDER_PATH = "./src/@mui"
const MATERIAL_PATH = "./node_modules/@mui/material"

function isFirstLetterUppercase(str) {
  const firstLetter = str[0]
  return firstLetter === firstLetter.toUpperCase()
}

function deleteFolderCallback(folderPath, callback) {
  if (fs.existsSync(folderPath)) {
    fs.rm(folderPath, { recursive: true }, (err) => {
      if (err) {
        console.error(`Error deleting folder ${folderPath}:`, err)
      } else {
        console.log(`Folder ${folderPath} deleted successfully.`)
      }
      callback(err)
    })
  } else {
    console.log(`Folder ${folderPath} does not exist.`)
    callback(null)
  }
}

function createSubdirectoryFiles(subdirectory: string, onlyArgs?: boolean) {
  const folderPath = path.join(FOLDER_PATH, subdirectory)
  const tsxFileName = `${subdirectory}.tsx`
  const storiesFileName = `${subdirectory}.stories.tsx`

  fs.mkdirSync(folderPath, { recursive: true })

  const isProblematicComponent = problematicComponents.includes(subdirectory)
  const isComplexGenericComponent =
    complexGenericComponents.includes(subdirectory)

  let template = componentTemplate
  if (isProblematicComponent) {
    template = problematicComponentTemplate
  } else if (isComplexGenericComponent) {
    template = complexGenericComponentTemplate
  }

  fs.writeFileSync(
    path.join(folderPath, tsxFileName),
    template.replace(/{subdirectory}/g, subdirectory)
  )

  let storyTemplateFile = (
    onlyArgs ? storiesJustArgsTemplate : storiesTemplate
  ).replace(/{subdirectory}/g, subdirectory)

  if (componentsConfig[subdirectory]) {
    storyTemplateFile = storyTemplateFile.replace(
      /{args}/g,
      componentsConfig[subdirectory].args
    )
    storyTemplateFile = storyTemplateFile.replace(
      /{otherImports}/g,
      componentsConfig[subdirectory].imports.join("\n")
    )
  } else {
    // Use ReactElement children for components that need them, otherwise use string
    const defaultArgs = componentsThatNeedReactElements[subdirectory]
      ? `{
      ${componentsThatNeedReactElements[subdirectory]},
    }`
      : `{
      children: "${subdirectory}",
    }`

    storyTemplateFile = storyTemplateFile.replace(/{args}/g, defaultArgs)
    storyTemplateFile = storyTemplateFile.replace(/{otherImports}/g, "")
  }

  fs.writeFileSync(path.join(folderPath, storiesFileName), storyTemplateFile)
}

function start() {
  deleteFolderCallback(FOLDER_PATH, (err) => {
    if (!err) {
      const subdirectories = fs.readdirSync(MATERIAL_PATH).filter((file) => {
        const fullPath = path.join(MATERIAL_PATH, file)
        return (
          fs.lstatSync(fullPath).isDirectory() && isFirstLetterUppercase(file)
        )
      })
      const documentComponentsList = new Set(documentComponents)
      subdirectories.forEach((subdirectory) =>
        createSubdirectoryFiles(
          subdirectory,
          !documentComponentsList.has(subdirectory)
        )
      )
    }
  })
}

start()
