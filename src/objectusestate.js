// import { useState } from "react";

// function ObjectUsestate() {
//   const [person, setPerson] = useState({
//     fname: "",
//     lname: "",
//     email: "",
//     address: "",
//     gender: "",
//   });

// //   const deleteData = (value) => {
// //     const deleteData = ObjectUsestate.filter((item, index) => { return index !== value });
// //     console.log(deleteData);
// //     ObjectUsestate = deleteData;
// //     localStorage.setItem("localdata", JSON.stringify(ObjectUsestate))

// // }

//   const [data, setData] = useState(
//     JSON.parse(localStorage.getItem("localdata")) || []
//   );

//   const handleOnChange = (e) => {
//     console.log(e.target.name);
//     setPerson({ ...person, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     setData([...data, person]);
//     localStorage.setItem("localdata", JSON.stringify([...data, person]));
//   };

//   console.log(person);
//   console.log(data);
//   return (
//     <div className="App">
//       <div>
//         <label for="fname">First Name:</label>
//         <input
//           type="text"
//           id="fname"
//           name="fname"
//           onChange={(e) => handleOnChange(e)}
//           value={person.fname}
//         />
//       </div>{" "}
//       <div>
//         <label for="fname">Last Name:</label>
//         <input
//           type="text"
//           id="lname"
//           name="lname"
//           value={person.lname}
//           onChange={(e) => handleOnChange(e)}
//         />
//       </div>{" "}
//       <div>
//         <label for="fname">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={person.email}
//           onChange={(e) => handleOnChange(e)}
//         />
//       </div>{" "}
//       <div>
//         <label for="fname">Address:</label>
//         <input
//           type="text"
//           id="address"
//           name="address"
//           value={person.address}
//           onChange={(e) => handleOnChange(e)}
//         />
//       </div>{" "}
//       <div>
//         <label for="phone">Phone No.:</label>
//         <input
//           type="tel"
//           id="phone"
//           name="phone"
//           value={person.phone}
//           onChange={(e) => handleOnChange(e)}
//         />
//       </div>{" "}
//       <div>
//         <label for="gender">Gender</label>
//         <input
//           onChange={(e) => handleOnChange(e)}
//           type="radio"
//           id="male"
//           name="gender"
//           value="male"
//         />
//         Male
//         <input
//           onChange={(e) => handleOnChange(e)}
//           type="radio"
//           id="female"
//           name="gender"
//           value="female"
//         />
//         Female
//       </div>
//       <div>
//         <button onClick={handleSubmit}>Submitt</button>
//       </div>
//       <table>
//         <thead>
//           <th>name</th>
//           <th>Lastname</th>
//           <th>Email</th>
//           <th>Address</th>
//           <th>Phone No.</th>
//           <th>Gender</th>
//           {/* <th>Delete</th> */}
//         </thead>
//         <tbody>
//           {data?.map((item, index) => {
//             return (
//               <tr>
//                 <td>{item?.fname}</td>
//                 <td>{item?.lname}</td>
//                 <td>{item?.email}</td>
//                 <td>{item?.address}</td>
//                 <td>{item?.phone}</td>
//                 <td>{item?.gender}</td>
//                 {/* <td><button  onClick={deleteData}>Delete</button></td> */}

//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default ObjectUsestate;

import { useState } from "react";
import { Table } from "./table";

function ObjectUsestate() {
  const [person, setPerson] = useState({
    fname: "",
    lname: "",
    email: "",
    address: "",
    gender: "",
    phone: "",
  });

  const [search, setSearch] = useState("");

  // editdata
  const [editIndex, setEditIndex] = useState(null);
  const editData = (item, index) => {
    setEditIndex(index);
    setPerson(item);
  };

  //sortdata
  const sortData = (sortOption) => {
    if (sortOption === "name") {
      setData([...data.sort((a, b) => (a.name > b.name ? 1 : -1))]);
    } else if (sortOption === "date") {
      setData([...data.sort((a, b) => (a.address > b.address ? 1 : -1))]);
    } else if (sortOption === "type") {
      setData([...data.sort((a, b) => (a.phone > b.phone ? 1 : -1))]);
    }
  };

  //searchdata
  const searchData = () => {
    // Filter records based on the search input
    const filteredRecords = data.filter(
      (item) =>
        item.fname.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        item.address.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        item.lname.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    console.log(filteredRecords);
    setData(filteredRecords);
  };

  // deleteData
  const deleteData = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
    localStorage.setItem("localdata", JSON.stringify(newData));
  };

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("localdata")) || []
  );

  const handleOnChange = (e) => {
    console.log(e.target.name);
    // spread oprator
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (editIndex !== null) {
      const updatedArray = data.map((item, index) => {
        if (index === editIndex) return person;
        else return item;
      });
      localStorage.setItem("localdata", JSON.stringify(updatedArray));
      setData(updatedArray);
      console.log(updatedArray);
    } else {
      setData([...data, person]);
      localStorage.setItem("localdata", JSON.stringify([...data, person]));
    }
  };

  console.log(person);
  console.log(data);
  return (
    <div className="App">
      <div className="Container">
        <div>
          <h1>Form</h1>
        </div>
        <div>
          <label for="fname">First Name:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            onChange={(e) => handleOnChange(e)}
            value={person.fname}
          />
        </div>{" "}
        <div>
          <label for="fname">Last Name:</label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={person.lname}
            onChange={(e) => handleOnChange(e)}
          />
        </div>{" "}
        <div>
          <label for="fname">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={person.email}
            onChange={(e) => handleOnChange(e)}
          />
        </div>{" "}
        <div>
          <label for="fname">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={person.address}
            onChange={(e) => handleOnChange(e)}
          />
        </div>{" "}
        <div>
          <label for="phone">Phone No.:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={person.phone}
            onChange={(e) => handleOnChange(e)}
          />
        </div>{" "}
        <div>
          <label for="gender">Gender</label>
          <input
            onChange={(e) => handleOnChange(e)}
            type="radio"
            id="male"
            name="gender"
            value="male"
          />
          Male
          <input
            onChange={(e) => handleOnChange(e)}
            type="radio"
            id="female"
            name="gender"
            value="female"
          />
          Female
        </div>
        <div>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submitt
          </button>
        </div>
        <button onClick={() => searchData()}>Search</button>
        <div className="dropdown">
          <button
            className="hi2"
            id="sortDropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Sort
          </button>
          <div className="dropdown-menu" aria-labelledby="sortDropdown">
            <button
              className="dropdown-item"
              href=""
              onClick={() => sortData("name")}
            >
              Sort by Name
            </button>
            <button
              className="dropdown-item"
              href=""
              onClick={() => sortData("type")}
            >
              Sort by Mobile Number
            </button>
            <button
              className="dropdown-item"
              href=""
              onClick={() => sortData("date")}
            >
              Sort by Address
            </button>
          </div>

          <div>
            <input
              type="text"
              placeholder="Search"
              id="searchInput"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
      <Table
        records={data}
        deleteData={deleteData}
        editData={(item, idx) => editData(item, idx)}
      />
    </div>
  );
}
export default ObjectUsestate;
