import clsx from 'clsx';
import s from './Options.module.css';

const Options = ({ reviews, handleClick, total, reset }) => {
  return (
    <ul className={clsx(s.optionsList)}>
      {reviews.map(reviews => (
        <li key={reviews}>
          <button onClick={() => handleClick(reviews)}>{reviews}</button>
        </li>
      ))}
      {total > 0 && (
        <li>
          <button onClick={reset}>Reset</button>
        </li>
      )}
    </ul>
  );
};

export default Options;
