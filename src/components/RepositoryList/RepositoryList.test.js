import React from 'react'
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import RepositoryList from './RepositoryList';

Enzyme.configure({ adapter: new Adapter() });

describe('<Header />', () => {

    it('Should render a loading message', () => {
        const repositoryList = shallow(
            <RepositoryList.WrappedComponent data={[]} total={0} loading={true} search={'test'}
                queried={false} />
        );
        console.log(repositoryList.debug())
        expect(repositoryList.find('HintMessage').length).to.equal(1);
    });
});
