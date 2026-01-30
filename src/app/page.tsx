import type { Metadata } from "next";
import ComingSoonClient from "../components/ComingSoonClient";

export const metadata: Metadata = {
  title: "Leaf & Root – Nourishing Your World | Coming Soon",
  description:
    "Leaf & Root is coming soon. Experience premium organic freshness, rooted in quality and delivered to your world.",
  keywords: [
    "organic food",
    "fresh produce",
    "leaf and root",
    "organic brand india",
    "healthy living",
  ],
  openGraph: {
    title: "Leaf & Root – Nourishing Your World",
    description:
      "Freshness is on its way. Premium organic living, rooted in quality.",
    url: "https://leafandroot.com",
    siteName: "Leaf & Root",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "Leaf & Root – Organic Living",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leaf & Root – Nourishing Your World",
    description:
      "Freshness is on its way. Premium organic living, rooted in quality.",
    images: ["/og_image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <ComingSoonClient />;
}
