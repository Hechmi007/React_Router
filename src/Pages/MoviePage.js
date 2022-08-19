import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams,Link } from 'react-router-dom';
import { Rating } from '@mui/material';
import { CardImg } from 'react-bootstrap';


const MoviePage = ({data}) => {
    let {id}=useParams()
    let movie=data.filter(e=>e.id===+id);
    movie.map(e=>console.log(e.title))
  return (
    <>
    {
        movie.map(e=>
    <Card key={e.id} className="text-center" style={{ width: '50rem' }}>
      <Card.Header><Rating  name="half-rating-read" value={e.rating} precision={0.5} readOnly  max={10}/></Card.Header>
      <Card.Body>
        <Card.Title>{e.title}</Card.Title>
        <Card.Img variant="bottom" src={e.posterUrl} />
        <Card.Text>
          {e.description}
        </Card.Text>
        <Link to={`/`}> <Button variant="primary">HomePage</Button></Link>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    )}
    </>
  )
}

export default MoviePage