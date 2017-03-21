# inferno-canvas-component

[![Build Status][travis-image]][travis-url]
[![NPM][npm-image]][npm-url]
[![bitHound Code][bithound-image]][bithound-url]

## Install
```
npm install --save inferno-canvas-component
```

## Usage

```javascript
import Inferno from 'inferno'
import Component from 'inferno-component'
import Canvas from 'inferno-canvas-component'

function drawCanvas({ctx, time}) {
    const {width, height} = ctx.canvas
    ctx.save()
    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = 'black'
    ctx.translate(width / 2, height / 2)
    ctx.rotate(((time / 10) % 360) * Math.PI / 180)
    ctx.fillRect(-1 * width / 4, -1 * height / 4, width / 2, height / 2)
    ctx.restore()
}

class App extends Component {
    render() {
        return <Canvas draw={drawCanvas} width={400} height={400} realtime/>
    }
}

Inferno.render(<App/>, document.body)
```

## Build
```
git clone https://github.com/nhz-io/inferno-canvas-component.git
cd inferno-canvas-component
npm install
npm start
...
check http://localhost:9000
...
npm run dist
```

## LICENSE

### [MIT](LICENSE)

## [VERSION](HISTORY.md)

### 0.1.4

[travis-image]: https://travis-ci.org/nhz-io/inferno-canvas-component.svg
[travis-url]: https://travis-ci.org/nhz-io/inferno-canvas-component

[npm-image]: https://img.shields.io/npm/v/inferno-canvas-component.svg?style=flat
[npm-url]: https://www.npmjs.com/package/inferno-canvas-component

[bithound-image]: https://www.bithound.io/github/nhz-io/inferno-canvas-component/badges/code.svg
[bithound-url]: https://www.bithound.io/github/nhz-io/inferno-canvas-component
