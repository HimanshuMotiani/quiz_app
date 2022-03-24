import React from 'react'
import {NavLink} from 'react-router-dom'
class Result extends React.Component{
    constructor(){
        super()
        this.state = {
            score:null,
            result:null

        }
    }

    componentDidMount(){
        let score = 0;
        let questions = this.props.questions;
        let answers = this.props.answers;

        let result  = questions.map((question,i)=>{
            if(question.correct_answer === answers[i]){
                score = score + 1
            }

            let obj = {
                question:question.question,
                correct_answer:question.correct_answer,
                yourAns:answers[i]
            }
            return obj;
        })

        this.setState({
            result:result,score:score
        })
    }

    render(){
        return (
            <>
        <section className=''>
        <h2 className='text-center font-bold text-2xl mb-10'>
          Your Score is : <span className="text-green-900 font-bold text-2xl">{this.state.score}</span>
        </h2>

        {this.state.result ? (
          <table className="border-2 border-gray-500 mt-10 mb-10 w-9/12 mx-auto">
            <thead>
              <tr>
                <th>Is Correct</th>
                <th>No.</th>
                <th>Question</th>
                <th>Correct Answer</th>
                <th>Your Answer</th>
              </tr>
            </thead>
            <tbody>
              {this.state.result.map((ele, i) => {
                return (
                  <tr key={i}>
                    <td className="text-center">
                      {ele.correct_answer === ele.yourAns ? (
                        <i className="fa fa-check text-green-800 text-4xl font-bold"></i>
                      ) : (
                        
                        <i className="fa fa-circle-xmark text-red-600 text-4xl"></i>
                      )}
                    </td>
                    <td className="text-center">{i + 1}</td>
                    <td className="text-center">{ele.question}</td>

                    <td className="text-center">{ele.correct_answer}</td>
                    <td className="text-center">{ele.yourAns}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          ''
        )}

        <div className='flex justify-center'>
          <NavLink to='/' className='px-3 py-2 rounded-md text-white bg-indigo-700 mb-10'>
            Go To Home
          </NavLink>
        </div>
      </section>
            </>
        )
    }
}

export default Result;