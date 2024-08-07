import clsx from 'clsx';
import s from './Feedback.module.css';

const Feedback = ({ reviews, positive, total }) => {
  return (
    <>
      <ul className={clsx(s.feedList)}>
        {reviews.map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}

        <li>Total: {total}</li>
        <li> Positive: {positive}% </li>
      </ul>
    </>
  );
};

export default Feedback;
