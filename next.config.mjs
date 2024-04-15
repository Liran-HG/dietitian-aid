/** @type {import('next').NextConfig} */
const nextConfig = {webpack: (config, { isServer }) => {
    if (!isServer) {
         config.resolve.fallback.fs = false
         config.resolve.fallback.dns = false
         config.resolve.fallback.net = false
    }

    return config;
}};

export default nextConfig;
