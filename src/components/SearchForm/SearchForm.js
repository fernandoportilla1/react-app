import React from 'react';

/**
 * Renderiza el formulario de búsqueda.
 */
class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      search: ''
    }
  }

  onChange(e) {
    this.setState({ search: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
  }

  render() {
    return <form onSubmit={this.onSubmit}>
      <label> Search a Repositories </label>
      <input type="text" className="u-full-widh" placeholder="react, webpack" onChange={this.onChange} defaultValue={this.state.search} />
      <p className="aling-center">
        <input type="submit" className="button-primary" value="Search" />
      </p>
    </form>;
  }
}

// Export the class
export default SearchForm;
