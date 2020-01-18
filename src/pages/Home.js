import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link }  from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import Button from "../components/StyledHero";
const Home = () => {
    return <>
<Hero>
        <Banner title="Luxurious Rooms" subtitle="Deluxe rooms starts at N299">
            <Link to="/rooms" className="btn-primary">
                our rooms
            </Link>
        </Banner>
    </Hero>
    < Services />
    <FeaturedRooms />
    <Button>Click Me</Button>
    </>

}
export default Home;
