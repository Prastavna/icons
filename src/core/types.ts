export interface IconOptions {
  size?: number;
  width?: number;
  height?: number;
  color?: string;
  class?: string;
  viewBox?: string;
  strokeWidth?: number;
  [key: string]: string | number | undefined;
}

export interface IconConfig {
  name: string;
  category: string;
  variant: "outline" | "filled";
  viewBox?: string;
  svgContent: string;
}

export interface IconFunction {
  (options?: IconOptions): string;
  iconName: string;
  category: string;
  variant: "outline" | "filled";
  viewBox: string;
  svg: string;
}
