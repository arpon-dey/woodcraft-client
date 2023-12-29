import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Typography
} from "@material-tailwind/react";
const ProductCard = ({ singleProduct }) => {
    const { name, price } = singleProduct
    return (
        <div className="">
            <Card className="mt-6 w-96 group">
                <CardHeader color="blue-gray" className="relative h-56">
                    <img
                        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                        alt="card-image"
                        className="group-hover:opacity-40 transition-opacity"
                    />
                    <div className=" hidden group-hover:block absolute top-20 left-20 ">

                        <div className="flex gap-4">
                            <button className="btn border-0 hidden group-hover:block bg-blue-gray-500 text-white px-4 py-2 rounded-md   ">
                                Add to Cart
                            </button>
                            <button className="btn border-0 hidden group-hover:block bg-blue-gray-500 text-white px-4 py-2 rounded-md    ">
                                Like
                            </button>
                        </div>
                    </div>
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="">
                        {name}
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <h2>
                        <span className="font-semibold">Price:</span> {price}
                    </h2>
                </CardFooter>
            </Card>

        </div>
    );
};

export default ProductCard;