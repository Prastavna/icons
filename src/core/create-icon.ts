import type { IconConfig, IconFunction, IconOptions } from "./types.ts";

const KNOWN_OPTIONS = new Set([
  "size",
  "width",
  "height",
  "color",
  "class",
  "viewBox",
  "strokeWidth",
]);

function buildAttributes(config: IconConfig, options: IconOptions): Record<string, string> {
  const viewBox = options.viewBox ?? config.viewBox ?? "0 0 24 24";
  const size = options.size ?? 24;
  const width = options.width ?? size;
  const height = options.height ?? size;
  const color = options.color ?? "currentColor";

  const attrs: Record<string, string> = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox,
    width: String(width),
    height: String(height),
  };

  if (config.variant === "outline") {
    attrs["stroke"] = color;
    attrs["fill"] = "none";
    attrs["stroke-width"] = String(options.strokeWidth ?? 2);
    attrs["stroke-linecap"] = "round";
    attrs["stroke-linejoin"] = "round";
  } else {
    attrs["fill"] = color;
    attrs["stroke"] = "none";
  }

  if (options.class) {
    attrs["class"] = options.class;
  }

  for (const [key, value] of Object.entries(options)) {
    if (!KNOWN_OPTIONS.has(key) && value !== undefined) {
      attrs[key] = String(value);
    }
  }

  return attrs;
}

function renderSvg(attrs: Record<string, string>, content: string): string {
  const attrStr = Object.entries(attrs)
    .map(([k, v]) => `${k}="${v}"`)
    .join(" ");
  return `<svg ${attrStr}>${content}</svg>`;
}

export function createIcon(config: IconConfig): IconFunction {
  const defaultViewBox = config.viewBox ?? "0 0 24 24";

  const fn = ((options?: IconOptions) => {
    const opts = options ?? {};
    const attrs = buildAttributes(config, opts);
    return renderSvg(attrs, config.svgContent);
  }) as IconFunction;

  fn.iconName = config.name;
  fn.category = config.category;
  fn.variant = config.variant;
  fn.viewBox = defaultViewBox;

  Object.defineProperty(fn, "svg", {
    get() {
      return fn();
    },
    enumerable: true,
  });

  return fn;
}
