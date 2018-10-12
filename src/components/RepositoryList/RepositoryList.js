import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

// Componentes
import Paginator from '../Paginator'
import RepositoryRow from '../RepositoryRow'
import HintMessage from '../HintMessage'

/**
 * Muestra la lista de Releases
 */
class RepositoryList extends PureComponent {

    renderMessage() {
        let text = '';

        if (this.props.loading) {
            text = <span>Search Results for <b>{this.props.search}</b></span>;
        } else if (this.props.data.length > 0) {
            text = <span>We found <b> {this.props.data.length}</b> data for<b> {this.props.search}</b> </span>;
        } else if (this.props.data.length === 0 && this.props.queried) {
            text = <span> We could't fin any data matching <b>{this.props.search}</b></span>;
        } else {
            text = 'Type the name of a repository and click search';
        }
        return <HintMessage> {text} </HintMessage>
    }

    renderTable() {
        if (this.props.data.length === 0) {
            return null
        } else {
            return <table className="u-full-width">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Release date</th>
                        <th>Download</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.data.map(repository =>
                            <RepositoryRow repository={repository} key={repository.id} />
                        )
                    }
                </tbody>
            </table>;
        }
    }


    render() {
        return <section className="RepositoryList">
            {this.renderMessage()}
            {this.renderTable()}
        </section>;
    }
}

RepositoryList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    queried: PropTypes.bool.isRequired,
    search: PropTypes.string.isRequired
}

// Export the class
export default Paginator(RepositoryList);
