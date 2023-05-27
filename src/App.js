import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        {data ? (
          <ul>
            {data.map((item) => (
              <>
                <h1 key={item.id}>{item.title}</h1>
                <p key={item.id}>{item.description}</p>
              </>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default App;
