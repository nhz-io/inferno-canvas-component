/* global document */

import './style.scss'
import Inferno from 'inferno'
import TestWrapper from './test-wrapper.js'

function main() {
    const div = document.createElement('div')
    document.body.appendChild(div)
    Inferno.render(<TestWrapper/>, div)
}

main()
