/* global requestAnimationFrame */

import Component from 'inferno-component'

export default class InfernoCanvasComponent extends Component {
    static defaultProps = {
        draw() {}, // eslint-disable-line no-empty-function
        realtime: false,
        top: 0,
        left: 0,
    }

    getChildContext() {
        const {context, props, canvasElement} = this
        const ctx = (context && context.ctx) || (canvasElement && canvasElement.getContext('2d'))
        const realtime = (context && context.realtime) || props.realtime

        return {ctx, realtime}
    }

    constructor(props) {
        super(props)
        this.refDOM = this.refDOM.bind(this)
        this.requestAnimationFrameCallback = this.requestAnimationFrameCallback.bind(this)
    }

    componentDidMount() {
        this.forceUpdate()
        requestAnimationFrame(this.requestAnimationFrameCallback)
    }

    render() {
        const {props, context} = this
        const {draw, realtime, top, left, ...other} = props // eslint-disable-line no-unused-vars
        requestAnimationFrame(this.requestAnimationFrameCallback)

        if (context.ctx) {
            return <div key="canvas" {...other}>{props.children}</div>
        }

        return <canvas ref={this.refDOM} key="canvas" {...other}>{props.children}</canvas>
    }

    refDOM(element) {
        this.canvasElement = element
    }

    requestAnimationFrameCallback(time) {
        if (this.previousFrameTime !== time) {
            const {props, context, canvasElement} = this
            const {draw, top, left} = props
            const ctx = (context && context.ctx) || (canvasElement && canvasElement.getContext('2d'))
            const realtime = (context && context.realtime) || props.realtime

            let delta = 0

            if (!draw || !ctx) {
                return
            }


            if (realtime) {
                requestAnimationFrame(this.requestAnimationFrameCallback)

                if (this.previousFrameTime) {
                    delta = time - this.previousFrameTime
                }
                else {
                    this.previousFrameTime = time
                }

                this.previousFrameTime = time
            }

            if (top || left) {
                ctx.translate(left, top)
            }

            draw({time, delta, ctx})

            if (top || left) {
                ctx.translate(-1 * left, -1 * top) // eslint-disable-line no-magic-numbers
            }
        }
    }
}
