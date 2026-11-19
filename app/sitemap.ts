import type { MetadataRoute } from "next";

const siteUrl = "https://midtowndentalbismarck.com";

const routes = [
  "/",
  "/about-us",
  "/meet-our-dentists",
  "/meet-our-dentists/dr-andrew-schmid",
  "/meet-our-dentists/dr-madison-morrell",
  "/services",
  "/insurance-and-payment-information",
  "/patient-center",
  "/contact-us",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route === "/" ? "" : route}`,
    lastModified: new Date("2026-11-18"),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
