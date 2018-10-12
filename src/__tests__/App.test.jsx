import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

it('renders without crashing', () => {
    const appWrapper = shallow(<App />);

    expect(appWrapper).toHaveClassName('App');
});
