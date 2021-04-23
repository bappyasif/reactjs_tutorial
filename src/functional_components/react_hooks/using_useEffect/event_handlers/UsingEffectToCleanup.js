import React, {useState, useEffect} from 'react';

export function UsingEffectToCleanup() {
    let [x, setX] = useState(0);
    let [y, setY] = useState(0);

    useEffect(() => {
        console.log('useEffect called to cleanup');
        window.addEventListener('mousemove', logPositions);

        // to unsubscribe from any existing event listener we can simly return a remove event handler to do so
        return () => {
            console.log('component unmounting');
            window.removeEventListener('mousemove', logPositions);
        }
        // to just runs once, we'll have to use an empty array meaning dont trigger change
    }, [])

    let logPositions = (evt) => {
        console.log('mouse event');
        setX(evt.clientX);
        setY(evt.clientY);
    }
    return (
        <div>
            <h4>X--{x} :: Y--{y}</h4>
        </div>
    )
}
