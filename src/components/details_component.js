import React, { Component } from "react";

class Details extends Component {
  state = {
    data: {},
    text: ["you know me!", "I am 6 feet tall", "", "I like football", "I am in college", "I live in Lucknow", "you know me!", "I am 6 feet tall", "", "I like football", "I am in college", "I live in Lucknow"],
  };

  componentDidMount() {
    this.setData();
  }

  componentDidUpdate(prevProps) {
    const { data } = this.props;

    if (JSON.stringify(data) !== JSON.stringify(prevProps.data)) {
      this.setData();
    }
  }

  setData = () => {
    const { data } = this.props;
    this.setState({ data: data });
  };

  render() {
    const { data, text } = this.state;
    console.log(data);
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-column="First Name">Name</td>
              <td data-column="Last Name">{data.name ? data.name : ""}</td>
            </tr>
            <tr>
              <td data-column="First Name">Age</td>
              <td data-column="Last Name">{data.age ? data.age : ""}</td>
            </tr>
            <tr>
              <td data-column="First Name">Count</td>
              <td data-column="Last Name">{data.count ? data.count : ""}</td>
            </tr>
            <tr>
              <td data-column="First Name">Description</td>
              <td data-column="Last Name">{text[Math.floor(Math.random() * text.length)]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Details;
