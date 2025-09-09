import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: { domains: [""], formats: ["image/avif", "image/webp"] },

  async redirects() {
    return [
      {
        source: "/old-route",
        destination: "/new-route",
        permanent: true,
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
