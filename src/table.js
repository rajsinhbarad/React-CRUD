export const Table = ({ records, deleteData, editData }) => {
  return (
    <table className="table table-striped table-warning">
      <thead>
        <th>name</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>Address</th>
        <th>Phone No.</th>
        <th>Gender</th>
        <th>Delete</th>
        <th>Edit</th>
      </thead>

      <tbody>
        {records?.map((item, index) => {
          return (
            <tr>
              <td>{item?.fname}</td>
              <td>{item?.lname}</td>
              <td>{item?.email}</td>
              <td>{item?.address}</td>
              <td>{item?.phone}</td>
              <td>{item?.gender}</td>
              <td>
                <button onClick={() => deleteData(index)}>Delete</button>
              </td>
              {/* <td><button onclick="editData(${index})">Edit</button></td> */}
              <td>
                <button onClick={() => editData(item, index)}>Edit</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
