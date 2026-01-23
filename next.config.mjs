// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;




/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // <--- THIS IS THE MAGIC LINE FOR CPANEL
  images: {
    unoptimized: true, // Required because cPanel doesn't have an Image Optimization server
  },
};

export default nextConfig;