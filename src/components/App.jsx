import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeadbackOptions } from './FeadbackForm/FeadbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  updateCount = (state) => {
    this.setState(prevState => {
      return { [state]: prevState[state] + 1 }
    })
  }; 
  countTotalFeedback = () => {
    Object.values(this.state).reduce((acc, value) => acc + value, 0);
}

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const countPositiveFeedbackPercentage = (good / total) * 100;
    return (
      <>
        <Section title="Please leave feadback">
          <FeadbackOptions options={this.state}
            onLeaveFeedback={this.updateCount}
          />
        </Section>
        {this.countTotalFeedback() > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          </Section>) : (<Notification message="There is no feedback" />)}
      </>
    );
  };
}
