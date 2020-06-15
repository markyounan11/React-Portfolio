import React, { Component } from 'react';
import { render } from '@testing-library/react';

import Contact from './../../components/Contact';

class ContainerContact extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    }
    render() {
        return (
            <Contact/>
        )
    }
}


export default ContainerContact;