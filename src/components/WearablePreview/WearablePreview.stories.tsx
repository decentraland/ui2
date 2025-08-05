/* eslint-disable import/no-default-export, import/exports-last, import/group-exports */
/* cspell:words gltf */
import { useCallback, useRef, useState } from "react"
import { WearableCategory } from "@dcl/schemas"
import {
  IPreviewController,
  PreviewCamera,
  PreviewEmote,
  PreviewProjection,
  WearableWithBlobs,
} from "@dcl/schemas/dist/dapps/preview"
import { BodyShape, Metrics } from "@dcl/schemas/dist/platform/item"
import { Meta, StoryObj } from "@storybook/react"
import { WearablePreview } from "./WearablePreview"
import { WearablePreviewContainer } from "./WearablePreview.stories.styled"

const getRandomProfile = () => {
  return `default${Math.floor(Math.random() * 160) + 1}`
}

const meta: Meta<typeof WearablePreview> = {
  title: "Decentraland UI/WearablePreview",
  component: WearablePreview,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    contractAddress: { control: "text" },
    tokenId: { control: "text" },
    itemId: { control: "text" },
    profile: { control: "text" },
    skin: { control: "text" },
    hair: { control: "text" },
    eyes: { control: "text" },
    bodyShape: {
      control: "select",
      options: [BodyShape.MALE, BodyShape.FEMALE],
    },
    camera: {
      control: "select",
      options: [PreviewCamera.INTERACTIVE, PreviewCamera.STATIC],
    },
    projection: {
      control: "select",
      options: [PreviewProjection.PERSPECTIVE, PreviewProjection.ORTHOGRAPHIC],
    },
    emote: {
      control: "select",
      options: [
        PreviewEmote.IDLE,
        PreviewEmote.CLAP,
        PreviewEmote.DAB,
        PreviewEmote.DANCE,
        PreviewEmote.FASHION,
        PreviewEmote.LOVE,
        PreviewEmote.MONEY,
      ],
    },
    disableBackground: { control: "boolean" },
    disableAutoRotate: { control: "boolean" },
    disableAutoCenter: { control: "boolean" },
    disableFace: { control: "boolean" },
    disableDefaultWearables: { control: "boolean" },
    disableDefaultEmotes: { control: "boolean" },
    dev: { control: "boolean" },
    unity: { control: "boolean" },
    unityMode: {
      control: "select",
      options: ["marketplace", "profile", "authentication", "builder"],
    },
  },
}

export default meta
type Story = StoryObj<typeof WearablePreview>

export const PreviewAnItem: Story = {
  args: {
    contractAddress: "0xee8ae4c668edd43b34b98934d6d2ff82e41e6488",
    itemId: "5",
  },
  render: (args) => (
    <WearablePreviewContainer>
      <WearablePreview {...args} />
    </WearablePreviewContainer>
  ),
}

export const PreviewAToken: Story = {
  args: {
    contractAddress: "0xee8ae4c668edd43b34b98934d6d2ff82e41e6488",
    tokenId: "1",
  },
  render: (args) => (
    <WearablePreviewContainer>
      <WearablePreview {...args} />
    </WearablePreviewContainer>
  ),
}

export const UsingAProfile: Story = {
  args: {
    profile: "0xc85a0a34d5f9f2239ab0622a41a2c2560ff119c6",
  },
  render: (args) => (
    <WearablePreviewContainer>
      <WearablePreview {...args} />
    </WearablePreviewContainer>
  ),
}

export const UsingCustomSkin: Story = {
  args: {
    contractAddress: "0x994684b980d6faff06ff36b13c243c31d1b3aa0e",
    itemId: "0",
    skin: "ff0000",
  },
  render: (args) => (
    <WearablePreviewContainer>
      <WearablePreview {...args} />
    </WearablePreviewContainer>
  ),
}

export const UsingCustomHair: Story = {
  args: {
    contractAddress: "0xe3d2c4ec777fb88dd219905cd896f79a592adf30",
    itemId: "0",
    hair: "00ff00",
  },
  render: (args) => (
    <WearablePreviewContainer>
      <WearablePreview {...args} />
    </WearablePreviewContainer>
  ),
}

export const WithEmote: Story = {
  args: {
    profile: "0xc85a0a34d5f9f2239ab0622a41a2c2560ff119c6",
    emote: PreviewEmote.FASHION,
  },
  render: (args) => (
    <WearablePreviewContainer>
      <WearablePreview {...args} />
    </WearablePreviewContainer>
  ),
}

export const UsingStaticCamera: Story = {
  args: {
    profile: "0xc85a0a34d5f9f2239ab0622a41a2c2560ff119c6",
    camera: PreviewCamera.STATIC,
  },
  render: (args) => (
    <WearablePreviewContainer>
      <WearablePreview {...args} />
    </WearablePreviewContainer>
  ),
}

export const WithoutAutoRotation: Story = {
  args: {
    profile: getRandomProfile(),
    disableAutoRotate: true,
  },
  render: (args) => (
    <WearablePreviewContainer>
      <WearablePreview {...args} />
    </WearablePreviewContainer>
  ),
}

export const WithoutBackground: Story = {
  args: {
    profile: getRandomProfile(),
    disableBackground: true,
  },
  render: (args) => (
    <WearablePreviewContainer>
      <WearablePreview {...args} />
    </WearablePreviewContainer>
  ),
}

export const WithCustomBackgroundColor: Story = {
  args: {
    profile: getRandomProfile(),
    background: "ff0000",
  },
  render: (args) => (
    <WearablePreviewContainer>
      <WearablePreview {...args} />
    </WearablePreviewContainer>
  ),
}

export const TakeScreenshotAndMetrics: Story = {
  render: () => {
    const [screenshot, setScreenshot] = useState("")
    const [metrics, setMetrics] = useState<Metrics | null>(null)
    const ref = useRef<IPreviewController | null>(null)

    const onLoad = useCallback(() => {
      ref.current = ref.current ?? WearablePreview.createController("some-id")
    }, [])

    return (
      <div style={{ padding: "20px" }}>
        <WearablePreviewContainer>
          <WearablePreview
            id="some-id"
            contractAddress="0x186c788f9c172934b790b868faf3b78b84e34e89"
            itemId="0"
            disableAutoRotate
            disableBackground
            onLoad={onLoad}
          />
        </WearablePreviewContainer>
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <button
            onClick={() =>
              ref.current?.scene.getScreenshot(1024, 1024).then(setScreenshot)
            }
          >
            Take Screenshot
          </button>
          <button
            onClick={() => ref.current?.scene.getMetrics().then(setMetrics)}
          >
            Get Metrics
          </button>
        </div>
        {screenshot && (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <img
              src={screenshot}
              alt="Screenshot"
              style={{ maxWidth: "256px" }}
            />
          </div>
        )}
        {metrics && (
          <div
            style={{
              marginTop: "20px",
              padding: "10px",
              background: "#f0f0f0",
            }}
          >
            <pre>{JSON.stringify(metrics, null, 2)}</pre>
          </div>
        )}
      </div>
    )
  },
}

export const DifferentProjections: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div>
        <h3 style={{ textAlign: "center" }}>Orthographic</h3>
        <div style={{ width: "256px", height: "256px" }}>
          <WearablePreview
            contractAddress="0xf3eb38b1649bdccc8761f3a0526b3173597a0363"
            itemId="2"
            projection={PreviewProjection.ORTHOGRAPHIC}
            disableAutoRotate
          />
        </div>
      </div>
      <div>
        <h3 style={{ textAlign: "center" }}>Perspective</h3>
        <div style={{ width: "256px", height: "256px" }}>
          <WearablePreview
            contractAddress="0xf3eb38b1649bdccc8761f3a0526b3173597a0363"
            itemId="2"
            projection={PreviewProjection.PERSPECTIVE}
            disableAutoRotate
          />
        </div>
      </div>
    </div>
  ),
}

function toWearableWithBlobs(file: File): WearableWithBlobs {
  return {
    id: "some-id",
    name: "",
    description: "",
    image: "",
    thumbnail: "",
    i18n: [],
    data: {
      category: WearableCategory.HAT,
      hides: [],
      replaces: [],
      tags: [],
      representations: [
        {
          bodyShapes: [BodyShape.MALE, BodyShape.FEMALE],
          mainFile: "model.glb",
          contents: [
            {
              key: "model.glb",
              blob: file,
            },
          ],
          overrideHides: [],
          overrideReplaces: [],
        },
      ],
    },
  }
}

export const PreviewFromFile: Story = {
  render: () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [file, setFile] = useState<File | null>(null)

    return (
      <div style={{ padding: "20px" }}>
        {file ? (
          <WearablePreviewContainer>
            <WearablePreview blob={toWearableWithBlobs(file)} />
          </WearablePreviewContainer>
        ) : (
          <div style={{ textAlign: "center", padding: "50px" }}>
            <input
              type="file"
              ref={inputRef}
              accept=".glb,.gltf"
              onChange={() => setFile(inputRef.current?.files?.[0] || null)}
            />
            <p>Select a .glb or .gltf file to preview</p>
          </div>
        )}
      </div>
    )
  },
}

export const UnityModes: Story = {
  args: {
    unity: true,
    unityMode: "marketplace",
    contractAddress: "0xee8ae4c668edd43b34b98934d6d2ff82e41e6488",
    itemId: "5",
  },
  render: (args) => {
    // Different configurations for each Unity mode
    const modeConfigs = {
      marketplace: {
        contractAddress: "0xee8ae4c668edd43b34b98934d6d2ff82e41e6488",
        itemId: "5",
      },
      profile: {
        profile: getRandomProfile(),
        contractAddress: undefined,
        itemId: undefined,
      },
      builder: {
        contractAddress: "0xee8ae4c668edd43b34b98934d6d2ff82e41e6488",
        itemId: "5",
        disableBackground: true,
      },
      authentication: {
        profile: getRandomProfile(),
        contractAddress: undefined,
        itemId: undefined,
        disableAutoRotate: true,
      },
    }

    const config =
      modeConfigs[args.unityMode as keyof typeof modeConfigs] ||
      modeConfigs.marketplace

    return (
      <WearablePreviewContainer>
        <WearablePreview {...args} {...config} />
      </WearablePreviewContainer>
    )
  },
}
