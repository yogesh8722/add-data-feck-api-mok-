// import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { useDispatch, useSelector } from 'react-redux';
// import { showUser } from '../redux/slice/createslice';

export default function Read() {
    // const dispatch = useDispatch();

    // const { user, loading } = useSelector((state) => state.app)
    // useEffect(() => {
    //     dispatch(showUser())
    // })

    // if (loading) {
    //     return (<h2>Loading...</h2>)
    // }

    return (
        <div>
            {/* {user && user.map((item) => ( */}
            
                
                
                <Card style={{ width: '18rem', margin: 'auto' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Tittle</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            {/* ))} */}
        
        </div>
    )
}
