
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react'




import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function Cart({data,delet,id,upload}) {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  
const handle3 = (id)=>{
  delet(id)

}
const handle4 =(id)=>{
upload(id)
}


 
  return (


    <Card style={{ width: '18rem' }}>

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label></Form.Label>
              <Form.Control as="textarea" rows={3} placeholder={data.desc} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
         
        <input type="file"  accept='.jpg' />
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>




      <Card.Img variant="top" src={data.img} />
      <Card.Body>
        <Card.Title> {data.title}</Card.Title>
        <Card.Text>
         {data.desc}
         {data._id}
        
        </Card.Text>
     
        <Button variant="primary" onClick={()=>handle3(id)} > DELETE</Button>
        <Button variant="primary" onClick={handleShow}> UPLOAD</Button>
      </Card.Body>
    </Card>
  );
}

export default Cart