import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Typewriter from "typewriter-effect";
import "./home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="typewriter-container">
        <h1 className='type'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Affordable Education for Everyone")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Browse Our Courses Today Here!")
                .start();
            }}
          />
        </h1>
      </div>
      <div className="container my-4 marleft">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4">
            <Card className="h-100 card-dark border-top border-bottom">
              <Card.Img className="border-top" variant="top" src="https://imgs.search.brave.com/NUQxJPMgcffjN-6FQSMcLpSmhzojHDUDBiPu771itMQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS93aGF0aXMvaW1n/X3JlYWN0LmpwZw" />
              <Card.Body className='bg-secondary border-bottom'>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary" className="button-dark">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <Card className="h-100 card-dark  border-top border-bottom">
              <Card.Img className="border-top" variant="top" src="https://imgs.search.brave.com/oaFGRaXb0-VRGAPDF1uzUObZzwpW4QdclW4QfTKVzE4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/dmVjdG9ycy5jb20v/c3RvcmFnZS9pbWFn/ZXMvbm9kZSUyMGpz/JTIwbG9nby5zdmc" />
              <Card.Body className='bg-secondary border-bottom'>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary" className="button-dark">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <Card className="h-100 card-dark  border-top border-bottom">
              <Card.Img className="border-top" variant="top" src="https://imgs.search.brave.com/ajV9Q4GYPoTWU5Kg7-anKEA-zsgbKeEc9RZSuyH_I9c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MmE3OGYzNGU0MmQ3/MjlkOTI4YjE3NTQu/cG5n" />
              <Card.Body className='bg-secondary border-bottom'>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary" className="button-dark">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <Card className="h-100 card-dark border-top  border-bottom">
              <Card.Img className="border-top" variant="top" src="https://imgs.search.brave.com/CspFmzb9ZvydkjKf58hr27yxfhWZi5ZpXhIf5Q2TmiA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL2xvZ28tbW9u/Z29kYi1wbmctaHVu/ZHJlZHMtb2YtcG9w/dWxhci1tb25nb2Ri/LWFydGljbGVzLTQw/MC5wbmc" />
              <Card.Body className='bg-secondary border-bottom'>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary" className="button-dark">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
