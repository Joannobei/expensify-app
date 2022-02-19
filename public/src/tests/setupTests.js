import React from 'react';
// import enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// enzyme.configure({
//     adapter: new Adapter()
// });


import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// import Enzyme from 'enzyme';
// import EnzymeAdapter from 'enzyme-adapter-react-16';

// Enzyme.configure({ adapter: new EnzymeAdapter() });