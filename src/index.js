// src index.js

import { last } from 'lodash';

const lastElement = () => {
    console.log(last(['one', 'two']));
}

export default lastElement;