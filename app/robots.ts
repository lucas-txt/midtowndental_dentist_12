import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://midtowndentalbismarck.com/sitemap.xml",
    host: "https://midtowndentalbismarck.com",
  };
}
