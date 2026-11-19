import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Midtown Dental",
    short_name: "Midtown Dental",
    description:
      "Quality dental care in the heart of Bismarck, North Dakota.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f3ea",
    theme_color: "#122119",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
