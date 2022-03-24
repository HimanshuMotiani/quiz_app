import React from "react";
import { NavLink } from "react-router-dom";
import Quiz from "./Quiz";
import Result from './Result'
import _ from "lodash";
class QuizDash extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: null,
      answers: [],
      isSubmitted: false,
    };
  }
  componentDidMount() {
    let category = this.props.match.params.category;
    let level = this.props.match.params.level;
    fetch(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${level}`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ questions: data.results }));
  }

  handleSubmit = () => {
    if (!this.state.answers[9]) {
      alert(`You must select answer of question`);
    } else {
      this.setState((prevState) => {
        return {
          isSubmitted: !prevState.isSubmitted,
        };
      });
    }
  };

  handleAnswer = (ans, currentQuestion) => {
    if (!this.state.answers[currentQuestion]) {
      this.setState((prevState) => {
        let updatedAnswer = _.concat(prevState.answers, ans);
        return {
          answers: updatedAnswer,
        };
      });
    }
  };

  render() {
    return (
      <>
        {this.state.questions && !this.state.isSubmitted ?(
          <div className="background h-screen">
            <Quiz
              questions={this.state.questions}
              handleAnswer={this.handleAnswer}
              answers={this.state.answers}
              handleSubmit={this.handleSubmit}
            />
          </div>
        ) : (
          ""
        )}
        {this.state.isSubmitted ? (
          <div className="background h-screen">
          <Result
            answers={this.state.answers}
            questions={this.state.questions}
          />
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default QuizDash;
