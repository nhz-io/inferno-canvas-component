import jsx from 'rollup-plugin-jsx'
import babel from 'rollup-plugin-babel'
import esformatter from 'rollup-plugin-esformatter'
import cleanup from 'rollup-plugin-cleanup'

export default {
    format: 'cjs',
    entry: 'src/inferno-canvas-component.js',
    dest: 'dist/inferno-canvas-component.js',
    external: [
        'inferno',
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
            factory: 'Inferno.createElement',
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
