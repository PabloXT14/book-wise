/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["s3-alpha-sig.figma.com", "lh3.googleusercontent.com", "github.com", "avatars.githubusercontent.com", "images.unsplash.com", "source.unsplash.com"]
  }
}

module.exports = nextConfig
