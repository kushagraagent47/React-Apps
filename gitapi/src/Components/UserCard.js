import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import UserRepos from "./UserRepos";

const UserCard = ({ data, repos }) => {
  if (typeof data != "undefined") {
    return (
      <>
        <div className="row">
          <div className="col-4">
            <Card className="mt-3">
              <CardImg
                top
                width="100%"
                src={data.data.avatar_url}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">{data.data.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Company - {data.company}
                </CardSubtitle>
                <CardText>
                  Availaible For Hiring - {data.data.hireable}
                </CardText>
              </CardBody>
            </Card>
          </div>
          <UserRepos repos={repos} />
        </div>
      </>
    );
  } else {
    return <div></div>;
  }
};

export default UserCard;
