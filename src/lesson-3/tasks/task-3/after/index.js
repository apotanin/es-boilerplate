'use strict';

import {logAndReturn, toInt} from "../../task-2/helper/index";

export default () => {
    let lastResult = 0;
    return (arg = 0) => logAndReturn(lastResult += toInt(arg))
};
