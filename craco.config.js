const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#0063e5',
                            '@text-color': '#f9f9f9',
                            '@text-color-secondary': '#c0c0c0',
                            '@heading-color': '@text-color',
                            '@link-color': '@text-color',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
