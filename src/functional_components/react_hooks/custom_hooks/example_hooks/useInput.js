import {useState} from 'react'

export function useInput(initialValue) {
    let [value, setValue] = useState(initialValue);

    let reset = () => {
        setValue(initialValue);
    }

    let bind = {
        value,
        onChange: evt => setValue(evt.target.value)
    }

    return [value, reset, bind];
}
