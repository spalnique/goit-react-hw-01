import css from './UserStats.module.css';

const UserStats = ({ userStats }) => {
  return Object.keys(userStats).map((x, i) => {
    return (
      <li className={css.statContainer} key={x}>
        <span className={css.statName}>{x}</span>
        <span className={css.statValue}>{Object.values(userStats)[i]}</span>
      </li>
    );
  });
};

export default UserStats;
