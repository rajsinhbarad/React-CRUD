import "./App.css";
import { useState } from "react";

function App() {
  const [fname, setFname] = useState("");
  console.log(fname);

  const [lname, setLname] = useState("");
  console.log(lname);

  return (
    <div className="App">
      <div>
        <label for="fname">First Name:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
      </div>{" "}
      <div>
        <label for="fname">Last Name:</label>
        <input
          type="text"
          id="lname"
          name="lname"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
      </div>{" "}
      <div>
        <label for="fname">Email:</label>
        <input type="email" id="email" name="email" />
      </div>{" "}
      <div>
        <label for="fname">Address:</label>
        <input type="text" id="address" name="address" />
      </div>{" "}
      <div>
        <button>Submitt</button>
      </div>
    </div>
  );
}

export default App;
