import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n-config.ts');


/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        BASE_URL:process?.env?.BASE_URL
    },
    typescript:{ignoreBuildErrors:true},
    eslint:{ignoreDuringBuilds:true}
};

export default withNextIntl(nextConfig);
