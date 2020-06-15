import React, { Component } from 'react';
import { render } from '@testing-library/react';

import Portfolio from './../../components/Portfolio';

class ContainerPortfolio extends Component {
    state = {
        repository: '',
        link: ''
    }
    render() {
        return (
            <Portfolio/>
        )
    }
}


export default ContainerPortfolio;