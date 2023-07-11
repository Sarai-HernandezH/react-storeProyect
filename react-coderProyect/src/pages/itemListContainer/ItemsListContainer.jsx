import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemsListContainer.css'
import { useNavigate } from 'react-router-dom';

const Greeting = (props) =>{
    return (
    <div>
        <h1 style={{
            textAlign: "center",
            fontSize: "2.5rem",
            fontFamily: "'Passion One', cursive",
            color: "red",
            margin: "40px 0px 0px 0px",
        }}>{props.text}</h1>
    </div>
    )
}

const Introduction = () =>{
    return(
        <div className="introParagraph">
            <p>
                Welcome to our music store, the ultimate destination for all music enthusiasts! Step into a world of rhythm, melody, and soul as we proudly present a vast collection of instruments, vinyl records, and CDs, curated to satisfy even the most discerning audiophiles.
                Whether you're a seasoned musician, a collector, or someone simply looking to embrace the power of music, we've got you covered. Our shelves are brimming with a diverse selection of high-quality instruments, each one crafted with precision and passion. 
                From guitars that ignite your rock 'n' roll spirit to keyboards that inspire symphonies of creativity, our instrument range caters to every genre and skill level.
            </p>
            <p>
                Vinyl lovers rejoice! Immerse yourself in the warmth and nostalgia of classic records with our carefully curated vinyl collection. 
                Rediscover the magic of analog sound as you browse through iconic albums, hidden gems, and collector's editions, waiting to be embraced by your turntable. 
                Feel the crackle and pop of the needle, and let the music transport you to another era.
            </p>
            <p>
                For those seeking the timeless charm of compact discs, our extensive CD selection will leave you spoiled for choice. 
                Dive into an ocean of genres, from classical masterpieces to contemporary chart-toppers, all packed with exceptional audio quality. 
                Whether you're building a personal library or searching for the perfect gift, our CDs offer an immersive listening experience that can't be replicated.
            </p>
            <p>
                But our store isn't just about the products; it's about celebrating the power of music and fostering a community of passionate individuals. 
                Our team of knowledgeable music enthusiasts is always ready to assist you, sharing their expertise and helping you make the perfect choice. 
                We believe in the magic that happens when music lovers come together, and we're here to create a space where you can connect, share stories, and ignite your musical journey.
                So, welcome to our virtual haven of harmonies and melodies. Take your time, explore our virtual aisles, and let the music guide you. Whether you're a seasoned maestro or a curious newcomer, we're thrilled to have you here. 
                Let the music play, and let your soul be uplifted by the incredible world of sounds that await you.
            </p>
        </div>
    )
}

const ContainerItemsToSell = () =>{

    return(
        <div>
            <Greeting text ='Welcome Music Lovers!' />
            <Introduction />
                <div className= "containerItems">
                    <Card bg="dark" className="cardsIndex">
                        <Card.Img className="cardsPics" variant="top" src="/instruments.jpg" />
                        <Card.Body>
                            <Card.Title className="cardTittles">Instruments</Card.Title>
                            <Card.Text className="cardTexts">
                                Come and check all the variety of instruments we have on store.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="danger" href="/instrumentCards">Click here to know more</Button>
                        </Card.Footer>
                    </Card>
                    <Card bg="dark" className="cardsIndex">
                        <Card.Img className="cardsPics" variant="top" src="/vynils.jpg" />
                        <Card.Body>
                            <Card.Title className="cardTittles">Vinyls</Card.Title>
                                <Card.Text className="cardTexts">
                                    Hundreds of Artists, find classics and brand new artists Vynil collections.
                                </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="danger" href="/vinyls">Click here to know more</Button>
                        </Card.Footer>
                    </Card>
                    <Card bg="dark" className="cardsIndex">
                        <Card.Img className="cardsPics" variant="top" src="/cds.jpg" />
                        <Card.Body>
                            <Card.Title className="cardTittles">CD's</Card.Title>
                            <Card.Text className="cardTexts">
                                If you are a collectionist you can come and check our huge collection of CD's
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="danger" href="/cds">Click here to know more</Button>
                        </Card.Footer>
                    </Card>
                </div>
        </div>
    )
}

function ItemsList () {
    return(
        <div>
            <ContainerItemsToSell />
        </div>
    )
}

export default ItemsList;
