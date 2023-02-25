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
    this.setState(prevState => ({ [state]: prevState[state] + 1 }));
}
  countTotalFeedback = () => {
    Object.values(this.state).reduce((acc, value) => acc + value, 0);
}

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() ? ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0) : '0';
}

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feadback">
          <FeadbackOptions options={this.state}
            onLeaveFeedback={this.updateCount}
          />
        </Section>

        {/* <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
  </Section> */}
  
        {this.countTotalFeedback() ? (
          <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
  </Section> ) : (<Notification message="There is no feedback"/> )

        } 
  
      </>
    );
  };
}
