/* eslint-disable no-undef */
module.exports = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  trailingSlash: true,
  images: {
    domains: [
      'picsum.photos',
      'fastly.picsum.photos',
      'avatars.githubusercontent.com',
      'i.imgur.com',
      's2.coinmarketcap.com',
    ],
  },
}

// Injected content via Sentry wizard below
/* eslint-diable no-var-requires */
const { withSentryConfig } = require('@sentry/nextjs')

module.exports = withSentryConfig(
  module.exports,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,

    org: 'multisig-labs',
    project: 'ggp-frontend',
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: '/monitoring',

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,
  },
)
