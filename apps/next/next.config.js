const { withExpo } = require('@expo/next-adapter')

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    transpilePackages: [
        'react-native',
        'react-native-web',
        'solito',
        'dripsy',
        '@dripsy/core',
        'react-native-unistyles',
        'app'
    ]
}

// eslint-disable-next-line functional/immutable-data
module.exports = withExpo(nextConfig)
