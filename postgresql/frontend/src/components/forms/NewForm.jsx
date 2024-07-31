import axios from "axios";
import { useState } from "react";

export default function NewForm() {
  const [username, setUsername] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios({
        method: "POST",
        url: "/new",
        data: {
          username,
        },
      });
      if (response.ok) {
        console.log("new user form submitted");
      } else {
        console.log("Error when adding new user form", response.status);
      }
    } catch (error) {
      console.log("Error when adding new user form", error);
    }
  };

  return (
    <>
      <div className="newUserFormContainer">
        <form onSubmit={handleFormSubmit}>
          <div className="formGroup">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="add username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="formGroup">
              <button type="submit">Add new user</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
