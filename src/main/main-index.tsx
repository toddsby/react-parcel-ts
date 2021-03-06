import React from 'react';
import uniq from 'lodash/uniq';
import {greet} from '../utils/helpers';

function Main() {
    let message:string = greet('hello from Plano', 'John');
    let values = [1,2,3,4];
    let dupes = [3,3,4,5,9,3,9,2,1,3,4,9];
    let sum = values.reduce((acc,cur)=>acc+cur,0);
    let unq = uniq(dupes);
    return (
        <section>
            <h2>Main {sum}</h2>
            <div>Unique {unq}</div>
            <div>{message}</div>
        </section>
    )
}

export default Main;
