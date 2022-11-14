
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cart({data,delet,id}) {

  

  
const handle3 = (id)=>{
  delet(id)

}


 
  return (


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.img} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         {data.desc}
         {data._id}
        </Card.Text>
     
        <Button variant="primary" onClick={()=>handle3(id)} > DELETE</Button>
        <Button variant="primary"> UPLOAD</Button>
      </Card.Body>
    </Card>
  );
}

export default Cart