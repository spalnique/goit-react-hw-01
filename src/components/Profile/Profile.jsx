import UserStats from '../UserStats/UserStats';
import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.userContainer}>
      <div className={css.userInfo}>
        <img src={image} alt='User avatar' />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.statsList}>
        <UserStats userStats={stats} />
      </ul>
    </div>
  );
};

export default Profile;
