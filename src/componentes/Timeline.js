import React, { Component } from 'react';
import FotoItem from './FotoItem';

export default class Timeline extends Component {
    constructor() {
        super();
        this.state = { fotos: [] };
    }

    componentDidMount() {
        fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('problemas para obter as fotos');
                }
            })
            .then(fotos => this.setState({ fotos }));
    }

    render() {
        return (
            <div className="fotos container">
                {
                    this.state.fotos.map(foto => <FotoItem key={foto.id} foto={foto} />)
                }
            </div>
        );
    }
}