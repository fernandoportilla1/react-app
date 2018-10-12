import React, { Component } from 'react';

// Importamos los componentes
import Header from '../../components/Header'
import SearchForm from '../../components/SearchForm'
import RepositoryList from '../../components/RepositoryList'

class SearchContainer extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            loading: false,
            result: [],
            search: '',
            queried: false
        }
    }

    stubData() {
        let repo = {
            full_name: 'My Repository',
            owner: {
                login: 'Angel',
                avatar_url: 'https://avatars.githubusercontent.com/u/4056725?v=3',
                html_url: 'https://github.com/Angelmmiguel'
            },
            stargazers_count: 10,
            forks_count: 5
        }
        return [
            Object.assign({}, repo),
            Object.assign({}, repo),
            Object.assign({}, repo),
            Object.assign({}, repo),
            Object.assign({}, repo),
            Object.assign({}, repo),
            Object.assign({}, repo),
            Object.assign({}, repo),
            Object.assign({}, repo),
            Object.assign({}, repo)
        ]
    }

    onSubmit(value) {
        this.setState({ loading: true })
        setTimeout(() => {
            this.setState({ search: value, loading: false, queried: true, result: this.stubData() })
        }, 2000);
    }

    render() {
        return <main className="container">
            <Header />
            <SearchForm onSubmit={this.onSubmit} search={this.search} />
            <h1>Búsqueda s</h1>
            <RepositoryList data={this.state.result} loading={this.state.loading} queried={this.state.queried} search={this.state.search} />
        </main>
    }
}

export default SearchContainer;
