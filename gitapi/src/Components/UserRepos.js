import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  Badge,
  Spinner,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const UserRepos = ({ repos }) => {
  console.log(repos);
  if (typeof repos != "undefined") {
    return (
      <>
        <div className="col-8 mt-3">
          <ListGroup>
            {repos.data.map((repo) => (
              <ListGroupItem className="justify-content-between" key={repo.id}>
                <ListGroupItemHeading>{repo.name}</ListGroupItemHeading>
                <Badge pill>{repo.language}</Badge>
              </ListGroupItem>
            ))}
          </ListGroup>
        </div>
      </>
    );
  } else {
    return (
      <div>
        <Spinner size="lg" color="primary" />
      </div>
    );
  }
};

export default UserRepos;
