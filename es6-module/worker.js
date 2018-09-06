import {basicNum, add} from "./math";
import {Promise} from 'bluebird';

function test() {
    console.log('basicNum: ', basicNum);
    console.log('adding basic num with 99: ', add(basicNum, 99));
}

test();