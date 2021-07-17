import { ListGroup } from "react-bootstrap";

function Post({ id, title, body }) {
  return (
      <ListGroup.Item action variant="primary">
        <div className="list__item">
          <div className="list__item__avator">{id}</div>
          <div className="list__item__title">{title}</div>
          <div className="list__item__body">{body}</div>
        </div>
      </ListGroup.Item>
  );
}




export default Post;
