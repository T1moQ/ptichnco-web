import type { MetadataRoute } from "next";
import { isProductionSite, siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // TODO(cabins): add the catalogue only after removing its noindex.
  return isProductionSite ? [{ url: `${siteUrl}/` }] : [];
}
