import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
// import { Route } from 'react-router';

// Componentes
// import GithubAvatar from '../GithubAvatar'
import { FaStar, FaCode } from 'react-icons/fa'
//import FaCodeFork from '../GithubAvatar'

/**
 * Renderiza la información relativa a un repositorio
 */
class RepositoryRow extends PureComponent {
    render() {
        let repository = this.props.repository;

        return <tr>
            <td>{repository.full_name}</td>
            {/* <td><GithubAvatar author={repository.owner} /></td> */}
            <td><FaStar /> {repository.stargazers_count}</td>
            <td><FaCode /> {repository.forks_count}</td>
            <td className="align-right">
                {/* <Route className="button button-primary" to={`/${repository.full_name}`}>Releases</Route> */}
            </td>
        </tr>
    }
}

RepositoryRow.propTypes = {
    repository: PropTypes.object.isRequired,
}

// Export the class
export default RepositoryRow;
