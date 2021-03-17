import { useState } from "react";
import {
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Spinner,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import UserCard from "./UserCard";

const SearchBox = () => {
  const [username, setUsername] = useState("");
  const [data, setData] = useState();
  const [repos, setRepos] = useState();
  const [loading, setLoading] = useState(false);

  const search = async () => {
    setLoading(true);
    try {
      var api = "https://api.github.com/users/" + username;
      var data = await axios.get(api);
      setData(data);
    } catch (error) {}
    try {
      var repo_api = "https://api.github.com/users/" + username + "/repos";
      var repo_data = await axios.get(repo_api);
      setRepos(repo_data);
      console.log(repo_data);
    } catch (error) {}
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="container">
        <div className="text-center">
          <Spinner size="lg" color="primary" />
          <span className="mt-2 ml-2 mr-2">Loading...</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="col-12">
        <InputGroup className="mt-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>@</InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Enter Git Username"
            value={username}
            onChange={(text) => setUsername(text.target.value)}
          />
          <button className="btn btn-primary ml-2" onClick={() => search()}>
            Search
          </button>
        </InputGroup>
        <UserCard data={data} repos={repos} />
      </div>
    );
  }
};

export default SearchBox;
