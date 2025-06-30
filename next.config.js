/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    serverKey: "SB-Mid-server-rMGdiX8hZ9OY4Q4JY-GcpJGE",
    clientKey: "SB-Mid-client-20BeY8kZfwB3A0TX",
    mongodb: "mongodb+srv://hungryguys:sNt2XQ!#&d3jcpLA@cluster0.ryno3p7.mongodb.net/?retryWrites=true&w=majority"
  },
}

module.exports = nextConfig
