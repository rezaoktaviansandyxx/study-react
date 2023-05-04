import { Card, Container, Row, Col, Image } from "react-bootstrap";
import antmanImage from "../assets/images/superhero/antman.jpg";
import avengerImage from "../assets/images/superhero/avenger.jpg";
import batmanImage from "../assets/images/superhero/batman.jpg";
import robinhoodImage from "../assets/images/superhero/robinhood.jpg";
import spidermanImage from "../assets/images/superhero/spiderman-cover.jpg";
import supermanImage from "../assets/images/superhero/superman.jpg";

const SuperHero = () => {
  return (
    <div  id="superhero">
      <Container>
        <br />
        <h1 className="text-white">Superhero Movies</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={antmanImage} alt="Antman Movies" className="images"/>
              <div className="bg-dark">
                <div className="m-1 p-2 text-white">
                  <Card.Title className="text-center">Antman</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={avengerImage} alt="Avenger Movies" className="images"/>
              <div className="bg-dark">
                <div className="m-1 p-2 text-white">
                  <Card.Title className="text-center">Avenger</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={batmanImage} alt="Batman Movies" className="images"/>
              <div className="bg-dark">
                <div className="m-1 p-2 text-white">
                  <Card.Title className="text-center">Batman</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={robinhoodImage} alt="Robinhood Movies" className="images"/>
              <div className="bg-dark">
                <div className="m-1 p-2 text-white">
                  <Card.Title className="text-center">Robinhood</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={spidermanImage} alt="Spiderman Movies" className="images"/>
              <div className="bg-dark">
                <div className="m-1 p-2 text-white">
                  <Card.Title className="text-center">Spiderman</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={supermanImage} alt="Superman Movies" className="images"/>
              <div className="bg-dark">
                <div className="m-1 p-2 text-white">
                  <Card.Title className="text-center">Superman</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SuperHero;