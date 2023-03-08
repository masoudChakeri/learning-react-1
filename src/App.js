import {Fragment, useState} from "react";

import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
    const [usersList, setUsersList] = useState([])

    const addUserHandler = (username, age) => {
        setUsersList(pervList => {
            return [...pervList, {key: Math.random().toString(), name: username, age: age}]
        })
    }

    return (
        <Fragment>
            <AddUser onAddUser={addUserHandler}/>
            <UsersList users={usersList}/>
        </Fragment>
    );
}

export default App;
