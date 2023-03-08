import {useState} from "react";

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
        <div>
            <AddUser onAddUser={addUserHandler}/>
            <UsersList users={usersList}/>
        </div>
    );
}

export default App;
