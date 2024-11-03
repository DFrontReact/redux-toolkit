import { useSelector } from 'react-redux';

const UserInfo = () => {
  const { name, age, mail } = useSelector((state) => state);

  return (
    <ul>
      <li>{name}</li>
      <li>{age}</li>
      <li>{mail}</li>
    </ul>
  );
};

export default UserInfo;
