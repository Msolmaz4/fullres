import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";

import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Cart({ data, delet, id, upload }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [desc, setDesc] = useState();
  const [img, setImg] = useState();

  const handle3 = (id) => {
    delet(id);
  };
  const handle4 = (e) => {
    e.preventDefault();
    upload(id, desc, img);
  };

  return (
    <div className="cart_ana">
      <div className="cart_flo">
      <Card style={{ width: "18rem" }}>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{data.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handle4}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label></Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder={data.desc}
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <input
              type="file"
              accept=".jpg"
              onChange={(e) => setImg(e.target.value)}
            />
            <Button variant="primary" onClick={handle4}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="cart_image">
          <Card.Img variant="top" src={data.img} />
        </div>

        <Card.Body>
          <div className="cart_title">
            <Card.Title> {data.title}</Card.Title>
          </div>
          <div className="cart_text">
            <Card.Text>{data.desc}</Card.Text>
          </div>

          <div className="cart_button">
            <Button variant="primary" onClick={() => handle3(id)}>
              {" "}
              DELETE
            </Button>
            <Button variant="primary" onClick={handleShow}>
              {" "}
              UPLOAD
            </Button>
          </div>
        </Card.Body>
      </Card>
      </div>
    </div>
  );
}

export default Cart;
