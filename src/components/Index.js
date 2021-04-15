import React, { Component } from "react";
import axios from "axios";
import Details from "./details_component";

class MainFile extends Component {
  state = {
    name: "",
    data: {},
    data_loaded: false,
  };

  submitFn = async e => {
    e.preventDefault();
    this.setState({ data_loaded: false });
    const { name } = this.state;
    if (name.length !== 0) {
      let response = await axios.get(`https://api.agify.io/?name=${name}`);
      if (response && response.status === 200) {
        this.setState({ data: response.data, data_loaded: true });
      }
    }
  };

  onChange = e => {
    console.log("in");
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, data_loaded, data } = this.state;
    return (
      <div>
        {!data_loaded ? (
          <div>
            <form className="text-input" onSubmit={this.submitFn}>
              <input className="input-text" type="text" name="name" value={name} onChange={this.onChange} placeholder="Try typing something in here!" />
              <label className="input-lable" for="input1">
                Name
              </label>
              <input type="submit" className="submit-btn" />
            </form>
          </div>
        ) : (
          <Details data={data} />
        )}
      </div>
    );
  }
}

export default MainFile;
