import React from "react";
import { Accordion } from "react-bootstrap";
import './accordion.css';
import photo1 from './begin.jpg';
import photo2 from './our mission.png';
import photo3 from './team.jpg';
import name1 from './leonor.jpg';
import name2 from './manager.jpg';
import name3 from './name3.jpg';
import name4 from './name4.avif';
import imageSix from './footer.png'
import { Card } from "react-bootstrap";


const BcAccordion = () => {
    return(
        <div className="bodyAccordion">
            <h1 className="aboutUsHeader">About us</h1>
        <Accordion defaultActiveKey="0" className="mt-5 p-3">
            <Accordion.Item eventKey="0" className="item">
                <Accordion.Header>How we begin</Accordion.Header>
                <Accordion.Body>
                    <img src={photo1} width='200' alt="business" className="accordionImageOne"/>
                    <h2>The beggining of our business...</h2>
                    <p>This is a family business and it started with grandmother skincare allergy. When she found ount that she can't use regular products she started to study and learn how to make products that will be healthy and do not cause allergy. During study she realizet how important is to take care of your body and skin for your health and for your beauty. But also how dangerous it can be if you put on a product that is not working for your skin. After years of trying and experiencing she finnaly made it. She started to use her own products and telling her friends about it. Soon she started to take orders from her friends. And after a while this grew into her business. This business is really important for us because we care about you.</p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className="item">
                <Accordion.Header>Our Mission</Accordion.Header>
                <Accordion.Body>
                    <img src={photo2} width='200' alt="business" className="accordionImageOne"/> 
                    <h2>Take good care to our customers</h2> 
                    <p>There are many different skincare formulas to try. There are hundreds, if not millions, available online. Whether you want to build a personal skincare line, or a premium skincare line, it’s a good idea to experiment before you start selling your product. Some vendors have starter kits to fit just about every budget. They usually include a few hundred units of private label products, ingredient stickers and tubes in different sizes. Some also come with a logo and box design that you can customize. Basic kits can cost around $1,000. A top skincare line can be built in a few different ways. You can start your own skincare line from scratch or work with a private skincare product supplier. With the right effort, you can rise to the top to become a top beauty brand.</p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3" className="item">
                <Accordion.Header>Our Team</Accordion.Header>
                <Accordion.Body>
                    <img src={photo3} width='200' alt="business" className="accordionImageOne"/> 
                    <h2>Meet our team</h2>

        <div className="accordionTeam">
            <div className="cardInfo">
      <Card className="card">
         <Card.Body variant="top">
          <Card.Text className="cardBody">
            <img src={name1} width="100" alt='name'/>
            <Card.Title>Leonor Smith</Card.Title>
            <p>Consultant</p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body variant="top">
        <Card.Text className="cardBody">
            <img src={name4} width="100" alt='name'/>
            <Card.Title>Dennis Glain</Card.Title>
            <p>Sale Manager</p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body variant="top">
        <Card.Text className="cardBody">
            <img src={name3} width="100" alt='name'/>
            <Card.Title>Victor Bogdan</Card.Title>
            <p>Manager</p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body variant="top">
        <Card.Text className="cardBody">
            <img src={name2} width="100" alt='name'/>
            <Card.Title>Aylin Morgan</Card.Title>
            <p>Director</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
</div>
        </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        <img src={imageSix} alt='footer' width='100%'/>
    </div>
    )
}
export default BcAccordion;