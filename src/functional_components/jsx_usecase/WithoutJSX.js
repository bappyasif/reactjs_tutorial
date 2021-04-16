import React from 'react';

export let WithoutJSX = () => {
    return React.createElement('div', {id: 'hello', className: 'hello'}, React.createElement('h4', null, 'Not a JSX Syntax'));
    // return React.createElement('div', null, React.createElement('h4', null, 'Not a JSX Syntax'));
    // return React.createElement('div', null, 'h4', 'Not a JSX Sytntax');
    // return React.createElement('div', null, '<h4>Not a JSX Sytntax</h4>')
}