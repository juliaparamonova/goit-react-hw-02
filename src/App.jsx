import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import Options from './components/Options/Options';
import { useState, useEffect } from 'react';

const App = () => {
  const initialState = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  const [reviews, setReviews] = useState(
    () => JSON.parse(window.localStorage.getItem('reviews')) ?? initialState
  );

  useEffect(() => {
    window.localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const updateFeedback = feedbackType => {
    setReviews(prev => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
  };

  const totalFeedback = Object.values(reviews).reduce(
    (acc, value) => acc + value,
    0
  );

  const resetReviews = () => {
    setReviews(initialState);
  };

  const positiveFeedback = Math.round((reviews.Good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        reviews={Object.keys(reviews)}
        handleClick={updateFeedback}
        reset={resetReviews}
        total={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          reviews={Object.entries(reviews)}
          positive={positiveFeedback}
          total={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
