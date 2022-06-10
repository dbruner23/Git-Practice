const User = () => {
    const users = [
        { "id": 1, "name": "Leanne Graham", "username": "Bret", "email": "Sincere@april.biz", "phone": "1-770-736-8031 x56442", "website": "hildegard.org", "company": { "name": "Romaguera-Crona", "catchPhrase": "Multi-layered client-server NN", "bs": "harness real-time e-markets" } }, 
        { "id": 2, "name": "David Bruner", "username": "Dave", "email": "dbruner23@gmail.com"}
    ]

    return (
        <div id="users">
            <h2>Users</h2>
            {users.map(user => {
                let { name, email } = user;
                return <p>{name}'s email is: {email}</p>
            })}
        </div>
    );
}
 
export default User;
