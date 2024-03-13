import { useState, useEffect } from "react";
import View from "./View";
import { Button } from "@mui/material";

//pulling the values from local values

const getDataLocalStorage = () => {
  const item = localStorage.getItem("data");
  if (item) {
    return JSON.parse(item);
  } else {
    return [];
  }
};

const LocalForm = () => {
  // creating array of object state to store
  const [data, setData] = useState(getDataLocalStorage());

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isbn, setIsbn] = useState("");

  //form submit event
  const handleAddUserSubmit = (e) => {
    e.preventDefault();

    //creating an object
    let user = {
      name,
      email,
      phone,
      isbn,
    };
    setData([...data, user]);
    setName("");
    setEmail("");
    setPhone("");
    setIsbn("");
  };

  //delete user from Local Storage
  const deleteUser = (isbn) => {
    const filteredUsers = data.filter((element) => {
      return element.isbn !== isbn;
    });
    setData(filteredUsers);
  };

  //saving data to local storage
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <div className="wrapper">
      <h1>Form User Data</h1>
      <div className="main">
        <div className="form-container">
          <form
            autoComplete="off"
            className="form-group"
            onSubmit={handleAddUserSubmit}
          >
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            ></input>
            <br />
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
            <br />
            <label>Phone</label>
            <input
              type="phone"
              className="form-control"
              required
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            ></input>
            <br />
            <label>ISBN#</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setIsbn(e.target.value)}
              value={isbn}
            ></input>
            <Button
              variant="contained"
              color="success"
              type="submit"
              className="btn btn-sucess btn-md"
            >
              SUBMIT
            </Button>
          </form>
        </div>
        <div className="view-container">
          {data.length > 0 && (
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>ISBN#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <View data={data} deleteUser={deleteUser} />
                </tbody>
              </table>
            </div>
          )}
          {data.length < 1 && <div>No user is added yet</div>}
        </div>
      </div>
    </div>
  );
};

export default LocalForm;
