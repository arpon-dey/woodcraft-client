import { Carousel } from '@material-tailwind/react';
import b1 from '../../assets/banner/b1.jpg';
import b2 from '../../assets/banner/b2.jpg';
import b3 from '../../assets/banner/b3.jpg';

const Banner = () => {
    return <div className='w-11/12 mx-auto my-4'>
        <Carousel className="rounded-xl">
            <img
                src={b1}
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <img
                src={b2}
                alt="image 2"
                className="h-full w-full object-cover"
            />
            <img
                src={b3}
                alt="image 2"
                className="h-full w-full object-cover"
            />
           
        </Carousel>
    </div>
}

export default Banner;