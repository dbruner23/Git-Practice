import { useState } from 'react';
function Username() {
    const [userName, setUserName] = useState('');
    const [submittedData, setSubmittedData] = useState(''); // initializing a state with an empty string
    function showData(e) {
        e.preventDefault(); // cancels the default action for the event
        setSubmittedData(userName);
    }
    function updateUserName(e) {
        const userNameInput = e.target.value;
        console.log(userNameInput);
        setUserName(userNameInput); // updating the state variable
    }
    return (
        <>
            <form onSubmit={showData}>
                <label>Name</label> <br />
                <input type="text" onChange={updateUserName} /> <br /> <br />
                <input type="submit" value="Show the user's name" />
            </form>
            <h1>{submittedData}</h1>
        </>
    );
}
export default Username;