import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const querySnapshot = await getDocs(collection(db, "magazine"));
const data = [];
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  data.push(doc.data());
});

const Magazine = () => {
  return (
    <section className="px-40 py-16 bg-[#ffffff]">
      <h1 className="lg:text-2xl uppercase">MAGAZINE</h1>
      <hr className="w-16 h-1 bg-green-600 mt-2" />
      <div className="flex flex-wrap gap-24">
        {data.toReversed().map((item) => (
          <div className="mt-16 ">
            <Card className="w-80">
              <CardHeader shadow={false} floated={false} className="h-96">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <div className="mb-2 flex items-center  justify-center">
                  <Typography
                    variant="h4"
                    color="blue-gray"
                    className="font-extrabold"
                  >
                    {item.name}
                  </Typography>
                </div>
              </CardBody>

              <CardFooter className="pt-0 mx-auto">
                <Button
                  ripple={false}
                  className="bg-[#52b871] text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 items-center "
                >
                  <a
                    href={item.magazine}
                    target="_blank"
                    rel="noreferrer"
                    className="no-underline"
                  >
                    Read More
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Magazine;
