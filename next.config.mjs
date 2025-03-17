/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.pranaair.com",
            }
        ]
    }
};

export default nextConfig;


 
  