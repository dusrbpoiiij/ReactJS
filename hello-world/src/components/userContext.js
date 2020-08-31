import React from 'react'
import User from './User'

const UserContext = React.createContext('Codevolution')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }
export default UserContext