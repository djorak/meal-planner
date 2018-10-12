import React from 'react';
import { shallow } from 'enzyme';

import MealPlanner from '../MealPlanner';

it('renders without crashing', () => {
    const mealPlannerWrapper = shallow(<MealPlanner />);

    expect(mealPlannerWrapper).toHaveClassName('MealPlanner');
});
