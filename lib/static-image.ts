import type { StaticImageData } from "next/image";

// Next 16.4.6's production optimizer returns 404 for these imported filenames
// unless the internal URL is encoded. Keep dimensions and blur data intact.
export function encodeStaticImage(image: StaticImageData): StaticImageData {
  return {
    ...image,
    src: image.src.split("/").map(encodeURIComponent).join("/"),
  };
}
