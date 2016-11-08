module.exports = function (config) {
    config.node('pages/test', function (nodeConfig) {
        nodeConfig.addTarget('?.js');

        nodeConfig.addTechs([
            [ require('enb-bem-techs/techs/levels'), { levels: ['blocks'] } ],
            [ require('enb/techs/file-provider'), { target: '?.bemdecl.js' } ],
            require('enb-bem-techs/techs/deps-old'),
            require('enb-bem-techs/techs/files'),
            [ require('enb-borschik/techs/js-borschik-include'), {
                sourceSuffixes: ['js'],
                target: '?.pre.js'
            } ],
            [ require('enb-borschik/techs/borschik'), {
                source: '?.pre.js',
                target: '?.js',
                tech: 'istanbul',
                techOptions: {
                    instrumentPaths: ['blocks']
                }
            } ]
        ]);
    });
};
