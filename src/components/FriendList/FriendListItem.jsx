import css from './FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span
        className={css.isOnline}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
      <img className={css.avatar} src={avatar} alt={`${name} avatar`} />
      <p className={css.name}>{name}</p>
    </li>
  );
};
