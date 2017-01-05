import jsx from 'rollup-plugin-jsx'
import babel from 'rollup-plugin-babel'
import esformatter from 'rollup-plugin-esformatter'
import cleanup from 'rollup-plugin-cleanup'
import inject from 'rollup-plugin-inject'

export default {
    format: 'cjs',
    entry: 'src/inferno-canvas-component.js',
    dest: 'dist/inferno-canvas-component.js',
    external: [
        'inferno',
        'inferno/dist/inferno-create-element.node',
        'inferno-component',

    ],
    interop: false,
    plugins: [
        babel({
            plugins: [
                'syntax-jsx',
                'transform-class-properties',
                'transform-object-rest-spread',
            ],
        }),

        jsx({
            factory: 'createElement',
        }),
        inject({
            createElement: 'inferno/dist/create-element',
            modules: {
                createElement: 'inferno/dist/inferno-create-element.node',
            },
        }),
        esformatter({
            indent: {
                value: '    ',
            },
            lineBreak: {
                before: {
                    ClassDeclaration: 2,
                },
                after: {
                    FunctionDeclarationClosingBrace: 2,
                    ClassOpeningBrace: 1,
                    ClassClosingBrace: 2,
                },
            },
        }),
        cleanup(),
    ],
}
