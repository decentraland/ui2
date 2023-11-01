import styled from "@emotion/styled"
import { ArgTypes, Title } from "@storybook/blocks"

import { Atlas, AtlasProps, Coord, Layer } from "./Atlas"
import { getTiles } from "./util"

import type { Meta, StoryObj } from "@storybook/react"

let tiles
if (window) {
  getTiles().then((_tiles) => (tiles = _tiles))
}

// For Sale

const forSaleLayer: Layer = (x, y) => {
  const key = x + "," + y
  if (tiles && tiles[key] && "price" in tiles[key]) {
    return { color: "#00d3ff" }
  }
  return null
}

// Selection

let selected: Coord[] = []

function isSelected(x: number, y: number) {
  return selected.some((coord) => coord.x === x && coord.y === y)
}

const selectedStrokeLayer: Layer = (x, y) => {
  return isSelected(x, y) ? { color: "#ff0044", scale: 1.4 } : null
}

const selectedFillLayer: Layer = (x, y) => {
  return isSelected(x, y) ? { color: "#ff9990", scale: 1.2 } : null
}

const handleClick = (x: number, y: number) => {
  console.log(x, y)
  if (isSelected(x, y)) {
    selected = selected.filter((coord) => coord.x !== x || coord.y !== y)
  } else {
    selected.push({ x, y })
  }
}

// Hover

let hover

const isValid = () => {
  if (!hover) return false
  // only valid if it fits in central plaza
  return hover.x >= -5 && hover.x <= 6 && hover.y >= -5 && hover.y <= 5
}

const isHighlighted = (x: number, y: number) => {
  if (!hover) return false
  // only highlight a 10x10 area centered around hover coords
  const radius = 5
  return (
    x > hover.x - radius &&
    x < hover.x + radius &&
    y > hover.y - radius &&
    y < hover.y + radius
  )
}

const handleHover = (x: number, y: number) => {
  hover = { x, y }
}

const hoverStrokeLayer: Layer = (x, y) => {
  if (isHighlighted(x, y)) {
    return {
      color: isValid() ? "#44ff00" : "#ff0044",
      scale: 1.5,
    }
  }
  return null
}

const hoverFillLayer: Layer = (x, y) => {
  if (isHighlighted(x, y)) {
    return {
      color: isValid() ? "#99ff90" : "#ff9990",
      scale: 1.2,
    }
  }
  return null
}

const AtlasContainer = styled.div({
  width: "90vw",
  height: "90vh",
  backgroundColor: "black",
})

const meta: Meta<AtlasProps> = {
  component: Atlas,
  title: "Decentraland UI/Atlas",
  tags: ["autodocs"],
  argTypes: {
    layers: {
      description: "layer to render on the map",
    },
    className: {
      description: "custom class name",
    },
    x: {
      description: "where to position the map in the X axis",
    },
    y: {
      description: "where to position the map in the Y axis",
    },
    initialX: {
      description: "where to initially position the map in the X axis",
    },
    initialY: {
      description: "where to initially position the map in the Y axis",
    },
    size: {
      description:
        "size of each parcel, i.e: size=5 makes each parcel of 5x5 pixels",
    },
    width: {
      description: "width of the canvas in pixels",
    },
    height: {
      description: "height of the canvas in pixels",
    },
    zoom: {
      description:
        "zoom level of the map, this changes in the end the size on which parcels are rendered, i.e: size=10 and zoom=0.5 makes each parcel of 5x5 pixels",
    },
    minX: {
      description: "min values for x(ie. the map boundaries)",
    },
    maxX: {
      description: "max values for x(ie. the map boundaries)",
    },
    minY: {
      description: "min values for y (ie. the map boundaries)",
    },
    maxY: {
      description: "max values for y (ie. the map boundaries)",
    },
    minSize: {
      description: "minimum size that parcels can take (after applying zoom)",
    },
    maxSize: {
      description: "maximum size that parcels can take (after applying zoom)",
    },
    panX: {
      description:
        "initial panning in the X axis, this changes the initial position of the map adding an offset to the prop `x`",
    },
    panY: {
      description:
        "initial panning in the Y axis, this changes the initial position of the map adding an offset to the prop `y`",
    },
    isDraggable: {
      description: "whether the map should be draggable or not",
    },
    padding: {
      description: "amount of padding tiles",
    },
    withZoomControls: {
      description: "whether the zoom controls should appear",
    },
    onMouseDown: {
      description: "callbacks",
    },
    onMouseUp: {
      description: "callbacks",
    },
    onClick: {
      description: "callbacks",
    },
    onHover: {
      description: " - ",
    },
    onPopup: { description: " - " },
    onChange: { description: " - " },
    onCenterChange: { description: " - " },
    renderMap: {
      description: "renderer",
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <ArgTypes />
        </>
      ),
    },
    layout: "centered",
    canvas: true,
  },
  loaders: [
    async () => ({
      tiles: await getTiles(),
    }),
  ],
  decorators: [
    (Story) => (
      <AtlasContainer>
        <Story />
      </AtlasContainer>
    ),
  ],
  render: (args, { loaded: { tiles } }) => <Atlas {...args} tiles={tiles} />,
}

export default meta
type Story = StoryObj<AtlasProps>

export const Uncontrolled: Story = {
  args: {},
  loaders: [
    async () => ({
      tiles: null,
    }),
  ],
}

export const Controlled: Story = {
  args: {},
  loaders: [
    async () => ({
      tiles: await getTiles(),
    }),
  ],
}

export const ForSale: Story = {
  args: {
    layers: [forSaleLayer],
  },
  loaders: [
    async () => ({
      tiles: await getTiles(),
    }),
  ],
}

export const ClickToSelect: Story = {
  args: {
    layers: [selectedStrokeLayer, selectedFillLayer],
    onClick: handleClick,
  },
  loaders: [
    async () => ({
      tiles: await getTiles(),
    }),
  ],
}

export const HoverToHighlight: Story = {
  args: {
    layers: [hoverStrokeLayer, hoverFillLayer],
    onHover: handleHover,
  },
  loaders: [
    async () => ({
      tiles: await getTiles(),
    }),
  ],
}

export const WithZoomControl: Story = {
  args: {
    layers: [hoverStrokeLayer, hoverFillLayer],
    onHover: handleHover,
    withZoomControls: true,
  },
  loaders: [
    async () => ({
      tiles: await getTiles(),
    }),
  ],
}
