import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaTwitch, FaWhatsapp } from "react-icons/fa";
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {

    const {providerLogin} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then( result => {
            const user = result.user;
            console.log(user);
        })
        .catch( error => {
            console.error(error);
        })
    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle/> Login With Google</Button>
                <Button variant="outline-dark"><FaGithub/> Login With Github</Button>
            </ButtonGroup>
            <div className='mt-3'>
                <h5>Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook className='me-2'/>Facebook </ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter className='me-2'/>Twitter </ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch className='me-2'/>Twitch </ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp className='me-2'/>Whatsapp </ListGroup.Item>
                    <ListGroup.Item className='mb-2'>Vestibulum at eros </ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;