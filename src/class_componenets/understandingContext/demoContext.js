import React from 'react';

let DemoContext = React.createContext();

let ContextProvider = DemoContext.Provider;
let ContextConsumer = DemoContext.Consumer;

export {ContextProvider, ContextConsumer}