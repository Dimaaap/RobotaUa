/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cf-rabota.com.ua",
                port: "",
            }
        ]
    }
};

export default nextConfig;
