/**
 * @author [Seolhun](https://github.com/Seolhun)
 * @email [shun10114@gamil.com]
 */

import * as React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { setEnzymeConfiguration } from './_config';

setEnzymeConfiguration(Enzyme);
describe('Sample Test', () => {
  const navbar = shallow(
    <div>
      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="sass.html">Sass</a>
        </li>
      </ul>
    </div>,
  );

  test('Sample Element has this element?', () => {
    expect(
      navbar.contains(
        <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="sass.html">Sass</a>
          </li>
        </ul>,
      ),
    ).toEqual(true);
  });
});
