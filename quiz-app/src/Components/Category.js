import React from "react";
class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: null,
    };
  }

  componentDidMount() {
    fetch("https://opentdb.com/api_category.php")
      .then((res) => res.json())
      .then((data) => this.setState({ categories: data.trivia_categories }));
  }

  render() {
    return (
      <>
        <div className="background">
          <div className="text-center">
            <h2 className="text-2xl py-5 font-bold">Select Category</h2>
          </div>
          {!this.state.categories ? (
            <h3 className="text-center font-bold text-3xl">Loading...</h3>
          ) : (
            <>
              <div className="w-9/12 my-0 mx-auto">
                {this.state.categories.map((category) => (
                  <div className={this.props.category === category? "inline-block each-category hover:bg-red-400 cursor-pointer red":"inline-block each-category hover:bg-red-400 cursor-pointer"} onClick={()=>this.props.addCategory(category)}>
                    <h5>{category.name}</h5>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}

export default Category;
