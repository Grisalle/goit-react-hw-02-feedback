import css from './Statistics.module.css';

function generateColor(percentage) {
  return `hsl(${percentage * 3},100%,45%)`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <div className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={css.item}
            style={{ backgroundColor: generateColor(stat.percentage) }}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

console.log(Math.random());
