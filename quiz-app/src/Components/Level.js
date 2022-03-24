import React from "react";
import { NavLink } from "react-router-dom";
class Level extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div className="background h-screen">
          <div className="text-center">
            <h2 className="text-2xl  pt-10 pb-4 font-bold">Select Difficulty Level</h2>
          </div>
          <div className=" text-center">
              <button onClick={(event)=>this.props.addLevel(event,"easy")} className={this.props.level === 'easy'?"btn-level red":"btn-level"}>Easy</button>
              <button onClick={(event)=>this.props.addLevel(event,"medium")} className={this.props.level === 'medium'?"btn-level red":"btn-level"}>Medium</button>
              <button onClick={(event)=>this.props.addLevel(event,"hard")} className={this.props.level === 'hard'?"btn-level red":"btn-level"}>Hard</button>
          </div>

          {this.props.level && this.props.category? (
            <div className="text-center">
                <NavLink to={`/quiz/${this.props.category.id}/${this.props.level}`}>
                    <button className="btn-level orange">Start Quiz</button>
                </NavLink>
            </div>
          ):""}
        </div>
      </>
    );
  }
}

export default Level;
