import React from 'react';

class Form extends React.Component {
    state = {
        name: '',
        quantity: 0
    };

    render() {
        return (
            <div>
                <h3>Ajouter des articles à acheter</h3>
                <form>
                <input 
                    type="number" 
                    value={this.state.quantity} 
                    onChange={(event) => this.setState({ quantity: event.target.value})} 
                    placeholder="quantity" />
                <input 
                    type="text" 
                    value={this.state.name} 
                    onChange={(event) => this.setState({ name: event.target.value})} 
                    placeholder="article" />
                <button type="submit">ajouter</button>
                </form>
            </div>
        );
    }
}


export default Form;