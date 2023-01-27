import { observer } from 'mobx-react-lite';
import React from 'react';
import counter from "../store/counter"

const Test = observer(() => {
    return (
        <div>
            <div>{counter.count}</div>
            <button onClick={() => counter.increment()}>Increment</button>
            <button onClick={() => counter.decrement()}>Decrement</button>
        </div>
    )
})

export default Test;