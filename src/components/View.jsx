import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";
const View = ({ data, deleteUser }) => {
  return data.map((user) => (
    <tr key={user.isbn}>
      <td>{user.isbn}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td className="delete-btn" onClick={() => deleteUser(user.isbn)}>
        <Icon icon={trash} />
      </td>
    </tr>
  ));
};

export default View;
