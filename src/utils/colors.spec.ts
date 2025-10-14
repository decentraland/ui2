import { hexToRgba } from "./colors"

describe("when converting hexadecimal colors to RGB", () => {
  describe("and the hex color is valid", () => {
    let validHex: string
    let result: string

    beforeEach(() => {
      validHex = "#FF0000"
    })

    describe("and no alpha is provided", () => {
      beforeEach(() => {
        result = hexToRgba(validHex)
      })

      it("should return RGB string with default alpha of 1", () => {
        expect(result).toBe("rgba(255, 0, 0, 1)")
      })
    })

    describe("and alpha is provided", () => {
      let alpha: number

      beforeEach(() => {
        alpha = 0.5
        result = hexToRgba(validHex, alpha)
      })

      it("should return RGB string with provided alpha", () => {
        expect(result).toBe("rgba(255, 0, 0, 0.5)")
      })
    })

    describe("and testing different color values", () => {
      it("should convert black color correctly", () => {
        const result = hexToRgba("#000000")
        expect(result).toBe("rgba(0, 0, 0, 1)")
      })

      it("should convert white color correctly", () => {
        const result = hexToRgba("#FFFFFF")
        expect(result).toBe("rgba(255, 255, 255, 1)")
      })

      it("should convert green color correctly", () => {
        const result = hexToRgba("#00FF00")
        expect(result).toBe("rgba(0, 255, 0, 1)")
      })

      it("should convert blue color correctly", () => {
        const result = hexToRgba("#0000FF")
        expect(result).toBe("rgba(0, 0, 255, 1)")
      })

      it("should convert mixed color values correctly", () => {
        const result = hexToRgba("#1A2B3C")
        expect(result).toBe("rgba(26, 43, 60, 1)")
      })

      it("should convert lowercase hex values correctly", () => {
        const result = hexToRgba("#ff0000")
        expect(result).toBe("rgba(255, 0, 0, 1)")
      })

      it("should convert mixed case hex values correctly", () => {
        const result = hexToRgba("#Ff0000")
        expect(result).toBe("rgba(255, 0, 0, 1)")
      })

      it("should convert short hex values correctly", () => {
        const result = hexToRgba("#0F0")
        expect(result).toBe("rgba(0, 255, 0, 1)")
      })

      it("should convert lowercase short hex values correctly", () => {
        const result = hexToRgba("#abc")
        expect(result).toBe("rgba(170, 187, 204, 1)")
      })

      it("should convert mixed case short hex values correctly", () => {
        const result = hexToRgba("#FfF")
        expect(result).toBe("rgba(255, 255, 255, 1)")
      })
    })

    describe("and alpha is at boundary values", () => {
      it("should accept alpha value of 0", () => {
        const result = hexToRgba("#FF0000", 0)
        expect(result).toBe("rgba(255, 0, 0, 0)")
      })

      it("should accept alpha value of 1", () => {
        const result = hexToRgba("#FF0000", 1)
        expect(result).toBe("rgba(255, 0, 0, 1)")
      })
    })
  })

  describe("and the hex color is invalid", () => {
    describe("and hex length is too short", () => {
      it("should throw error for 4 character hex", () => {
        expect(() => hexToRgba("#FF00")).toThrow("Invalid hexadecimal color")
      })

      it("should throw error for 5 character hex", () => {
        expect(() => hexToRgba("#FF000")).toThrow("Invalid hexadecimal color")
      })

      it("should throw error for 6 character hex", () => {
        expect(() => hexToRgba("#FF000")).toThrow("Invalid hexadecimal color")
      })
    })

    describe("and hex length is too long", () => {
      it("should throw error for 8 character hex", () => {
        expect(() => hexToRgba("#FF000000")).toThrow(
          "Invalid hexadecimal color"
        )
      })

      it("should throw error for 9 character hex", () => {
        expect(() => hexToRgba("#FF0000000")).toThrow(
          "Invalid hexadecimal color"
        )
      })
    })

    describe("and hex is missing hash symbol", () => {
      it("should throw error for hex without hash", () => {
        expect(() => hexToRgba("FF0000")).toThrow("Invalid hexadecimal color")
      })
    })

    describe("and hex contains invalid characters", () => {
      it("should throw error for hex with invalid characters", () => {
        expect(() => hexToRgba("#GG0000")).toThrow("Invalid hexadecimal color")
      })

      it("should throw error for hex with special characters", () => {
        expect(() => hexToRgba("#FF@000")).toThrow("Invalid hexadecimal color")
      })

      it("should throw error for hex with lowercase invalid characters", () => {
        expect(() => hexToRgba("#gg0000")).toThrow("Invalid hexadecimal color")
      })

      it("should throw error for hex with mixed case invalid characters", () => {
        expect(() => hexToRgba("#Gg0000")).toThrow("Invalid hexadecimal color")
      })
    })
  })

  describe("and the alpha value is invalid", () => {
    describe("and alpha is negative", () => {
      it("should throw error for negative alpha", () => {
        expect(() => hexToRgba("#FF0000", -0.1)).toThrow("Invalid alpha value")
      })

      it("should throw error for alpha less than 0", () => {
        expect(() => hexToRgba("#FF0000", -1)).toThrow("Invalid alpha value")
      })
    })

    describe("and alpha is greater than 1", () => {
      it("should throw error for alpha greater than 1", () => {
        expect(() => hexToRgba("#FF0000", 1.1)).toThrow("Invalid alpha value")
      })

      it("should throw error for alpha much greater than 1", () => {
        expect(() => hexToRgba("#FF0000", 2)).toThrow("Invalid alpha value")
      })
    })
  })
})
