/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
    images: {
        remotePatterns: [{hostname: "utfs.io"}]
    },
    typescript: {
        ignoreBuildErrors: true, //we can do this in a github action instead of at build
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default config;
