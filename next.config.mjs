/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: ['192.168.1.4', 'localhost', '127.0.0.1']
    }
};

export default nextConfig;
