/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    env: {
        JOIN_SECRET_CODE: process.env.JOIN_SECRET_CODE,
    },
};

module.exports = nextConfig;
