import React from 'react';

let UserContext = React.createContext('Brie');

let UserProvider = UserContext.Provider;
let UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}
// there is another of consuming context, for that we'll have to export UserContext
export default UserContext;