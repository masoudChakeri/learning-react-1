import {Fragment, useRef, useState} from "react";

import Card from "../Ui/Card";
import Button from "../Ui/Button"

import classes from "./AddUser.module.css";
import ErrorModal from "../Ui/ErrorModal";

const AddUser = (props) => {
    const enteredUsername = useRef()
    const enteredAge = useRef()
    const [error, setError] = useState()
    const addUserHandler = (event) => {
        event.preventDefault()

        const username = enteredUsername.current.value
        const age = enteredAge.current.value

        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name or age (non-empty values)"
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (> 0)"
            })
            return;
        }

        props.onAddUser(username, age)

        enteredUsername.current.value = ''
        enteredAge.current.value = ''
    }


    const errorHandler = () => {
        setError(null)
    }

    return (
        <Fragment>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}

            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" ref={enteredUsername}/>

                    <label htmlFor="age">Age (year)</label>
                    <input id="age" type="number" ref={enteredAge}/>

                    <Button type="submit">submit</Button>
                </form>
            </Card>
        </Fragment>
    )
}

export default AddUser;