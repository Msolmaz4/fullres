import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cart({data}) {
  return (



    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.img} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         {data.desc}
        </Card.Text>
     
        <Button variant="primary"> DELETE</Button>
        <Button variant="primary"> UPLOAD</Button>
      </Card.Body>
    </Card>
  );
}

export default Cart