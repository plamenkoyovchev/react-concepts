import React from "react";

const defaultValue = "Anonymous";
export const UserContext = React.createContext(defaultValue);

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
