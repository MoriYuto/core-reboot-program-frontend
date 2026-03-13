export type ColorName =
  | "primary"
  | "onPrimary"
  | "surface"
  | "onSurface"
  | "surfaceContainer"
  | "onSurfaceContainer";

type ColorPalette = Record<ColorName, string>;

export const lightPalette: ColorPalette = {
  primary: "#D4AF37",
  onPrimary: "#0F172A",
  surface: "#1E293B",
  onSurface: "#FFFFFF",
  surfaceContainer: "#374151",
  onSurfaceContainer: "#9CA3AF",
};

export const darkPalette: ColorPalette = {
  primary: "#D4AF37",
  onPrimary: "#0F172A",
  surface: "#1E293B",
  onSurface: "#FFFFFF",
  surfaceContainer: "#374151",
  onSurfaceContainer: "#9CA3AF",
};
