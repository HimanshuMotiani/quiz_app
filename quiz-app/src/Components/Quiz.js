import React from "react";
import { NavLink } from "react-router-dom";
import _ from "lodash";
import PreviousMap from "postcss/lib/previous-map";
class Quiz extends React.Component {
  constructor() {
    super();
    this.state = {
      currentQuestion: 0,
      answers: null,
      correctAnswer: null,
    };
  }

  componentDidMount() {
    let arrOfIncorrect = [
      ...this.props.questions[this.state.currentQuestion].incorrect_answers,
    ];

    let correctAns =
      this.props.questions[this.state.currentQuestion].correct_answer;

    let arrOfAllAns = _.uniq(_.concat(arrOfIncorrect, correctAns));

    this.setState({
      answers: arrOfAllAns,
      correctAnswer: correctAns,
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentQuestion !== this.state.currentQuestion) {
      let arrOfIncorrect = [
        ...this.props.questions[this.state.currentQuestion].incorrect_answers,
      ];

      let correctAns =
        this.props.questions[this.state.currentQuestion].correct_answer;

      let arrOfAllAns = _.uniq(_.concat(arrOfIncorrect, correctAns));

      this.setState({
        answers: arrOfAllAns,
        correctAnswer: correctAns,
      });
    }
  }

  handleNext = ()=>{
      if(!this.props.answers[this.state.currentQuestion]){
          alert(`You must enter some answer`)
      }
      else{
          this.setState((prevState)=>{
              return {
                  currentQuestion:prevState.currentQuestion + 1
              }
          })
      }
  }

  render() {
    let questionOnScreen = this.props.questions[this.state.currentQuestion];
    return (
      <>
        <div className="question w-9/12 my-0 mx-auto py-8 text-center">
          <h5 className="text-center font-bold text-2xl my-3">
            Question No-{this.state.currentQuestion + 1}
          </h5>
          <h6 className="text-center font-bold text-2xl bg-blue-400 rounded-xl p-2 inline-block my-3">
            Difficulty Level - {questionOnScreen.difficulty}
          </h6>

          <div className="font-bold text-green-900 text-left mt-10">
            <h3 className="text-2xl font- ml-5">
              Question : {questionOnScreen.question}
            </h3>
          </div>

          {this.state.answers ? (
            <>
              <ul className="mx-auto w-5/6 mb-10 mt-5">
                {this.state.answers.map((answer, i) => {
                  return (
                    <li
                      onClick={(event) => {
                        this.props.handleAnswer(
                          answer,
                          this.state.currentQuestion
                        );
                      }}
                      key={i}
                      className={
                        this.props.answers[this.state.currentQuestion] ===
                        answer
                          ? "mb-5 border px-3 py-2 rounded-md bg-green-900 hover:bg-green-700 text-white cursor-pointer text-left"
                          : " mb-5 border px-3 py-2 rounded-md bg-green-300 hover:bg-yellow-700 cursor-pointer text-left"
                      }
                    >
                      {i + 1} : {"   " + answer}
                    </li>
                  );
                })}
              </ul>
            </>
          ) : (
            ""
          )}
          <div>
            {this.state.currentQuestion > 8 ? (
              <div>
                <button onClick={this.props.handleSubmit} 
                className="btn-level orange">Submit</button>
              </div>
            ) : (
              <button onClick={this.handleNext} className="btn-level orange">Next</button>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Quiz;
