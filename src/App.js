import React, { useState } from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

/* 
  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];https://lh3.googleusercontent.com/TNijZW_Gp9MZ3eqXkve0YWDEiHV-a2IpSpD6IJzrV3Y76GJcLEyzX2regTLemXzBHbHVqkKuxnnWDT34Cp4sNh-Y=w128-h128-e365-rj-sc0x00ffffff
      updatedGoals.unshift({ text: enteredText, id: 'goal1' });
      return updatedGoals;
    });
  };
  This code is incorrect because if you look at line 17 we have 
  a static id for all goals, so when we go to delete a goal we 
  will not delete the correct one the correct way to write 
  this function is below
 */

  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    /*
          <section id="goal-form">
            <CourseInput onAddGoal={addGoalHandler} />
          </section>
          <section id="goals">
            {content}
          </section> 
           
          This code wont compile becuase React has a rule
          that requires JSX elements to be wrapped in one 
          enclosing tag; example: "div"
          */
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
      </section>
    </div>
  );
};

export default App;
