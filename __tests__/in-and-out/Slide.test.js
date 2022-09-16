/*
 * Slide Component Test Suite
 *
 * Copyright © Roman Nosov 2017
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import Slide from '../../Slide';

import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from '@mnajdova/enzyme-adapter-react-18';

configure({ adapter: new Adapter() });

describe('Slide', () => {
  it('renders a initial view', () => {
    const content = shallow(
      <Slide>
        <div>Test test</div>
      </Slide>
    );
    expect(content.html()).toMatchSnapshot();
  });
});
