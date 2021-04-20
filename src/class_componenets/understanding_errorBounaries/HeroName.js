import React from 'react'

export function HeroName({heroName}) {
    if(heroName === 'joker') {
        throw Error ('not a freaken hero');
    }
    return (
        <div>
            <p>{heroName}</p>
        </div>
    )
}
