'use strict';

export default function Entity(data) {
    this.data = data;
}

Entity.prototype.getEntity = function () {
    return this.data;
};
