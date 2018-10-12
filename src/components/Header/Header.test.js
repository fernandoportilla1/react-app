import React from 'react'
import { expect } from 'chai';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from './Header';

Enzyme.configure({ adapter: new Adapter() });

describe('<Header />', () => {

    it('Should render the header of the page', () => {
        const header = render(
            <Header />
        );

        expect(header.text()).to.equal('Github Releases');
        expect(header.find('h1').length).to.equal(1);
    });
});
