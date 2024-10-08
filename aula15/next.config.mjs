/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'ecomspark.com',
                port:'',
                pathname: '/**',
            }
        ],
    },
};

export default nextConfig;
