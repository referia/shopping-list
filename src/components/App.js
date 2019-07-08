import React from 'react';

import Form from './Form';
import ItemList from './ItemList'; 

const uuidv4 = require('uuid/v4');

class App extends React.Component {

    state = {articles : []};

    addArticle = (article) => {
        let oldArticles = this.state.articles;
        article.id = uuidv4();
        let newArticles = [...oldArticles, article];
        this.setState({ articles : newArticles });

        console.log('article vu par le parent App ', article);
    }


    render() {
        return (
            <div className="container">
                <h3>Shopping list</h3>
                < Form formTitle="Add product on my shopping list" addArticle={this.addArticle} />
                < ItemList articles={this.state.articles} />
            </div>
        );
    }
}

export default App;