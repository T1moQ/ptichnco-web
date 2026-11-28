import type { MetadataRoute } from "next";
import { isProductionSite, siteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  if (!isProductionSite) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  // /cabins must remain crawlable so bots can read its noindex directive.
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
