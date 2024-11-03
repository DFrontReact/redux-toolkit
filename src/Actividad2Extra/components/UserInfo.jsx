import { getUserStore, useAppSelector } from '../store/store';

const UserInfo = () => {
  const { name, age, mail } = useAppSelector(getUserStore);

  return (
    <ul>
      <li>{name}</li>
      <li>{age}</li>
      <li>{mail}</li>
    </ul>
  );
};

export default UserInfo;
