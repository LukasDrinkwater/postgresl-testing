import axios from "axios";
import { useState, useEffect } from "react";

export default function DeleteUserForm() {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: "/users",
          withCredentials: true,
        });
        if (response.data.length > 0) {
          console.log(response);
          setUsers(response.data);
        }
      } catch (error) {
        console.log("Error getting users", error);
      }
    };

    getUsers();
  }, []);

  const handleDeleteUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios({
        method: "POST",
        url: "/delete-user",
        data: {
          username,
        },
      });
      if (response.ok) {
        console.log("user deleted");
      } else {
        console.log("error when submitting form", response.status);
      }
    } catch (error) {
      console.log("error submiting form", error);
    }
  };

  return (
    <div className="deleteUserFormContainer">
      <form onSubmit={handleDeleteUser}>
        <div className="formGroup">
          <label htmlFor="username">Username:</label>
          <select
            name="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
          >
            <option>Select usernam to remove</option>
            {users.map((user) => {
              return (
                <option key={user.id} value={user.username}>
                  {user.username}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit">Remove user</button>
      </form>
      {error && (
        <div className="errorContainer">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
