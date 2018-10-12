import React from 'react';
import PropTypes from 'prop-types';

// Estilos
import './HintMessage.css';

/**
 * Muestra un mensaje aplicandole un estilo predeterminado
 */
class HintMessage extends React.PureComponent {
    render = () => <p className="HintMessage">{this.props.children}</p>;
}

HintMessage.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string
    ]).isRequired
}

// Export the class
export default HintMessage;
