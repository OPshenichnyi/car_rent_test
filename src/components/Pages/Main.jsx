import CardAuto from "../CardAuto/CardAuto";
import styled from "styled-components";
const data = [
  {
    id: 1000,
    year: 2011,
    make: "Toyota",
    model: "Camry",
    type: "Sedan",
    img: "https://fs8.fex.net/preview/4837827954/0x0",
    description:
      "Toyota Camry is a high-quality Sedan known for its reliability and performance.",
    fuelConsumption: "13.2",
    engineSize: "4.0L V6",
    accessories: [
      "Leather seats",
      "Sunroof",
      "Bose sound system",
      "Navigation system",
    ],
    functionalities: [
      "Bluetooth connectivity",
      "Tire pressure monitoring",
      "Rearview camera",
      "Stability control",
    ],
    rentalPrice: "$88",
    rentalCompany: "Elite Car Rentals",
    address: "123 Example Boulevard, Kharkiv, Ukraine",
    rentalConditions:
      "Minimum age: 25\nValid driver's license\nSecurity deposit required",
    mileage: 10289,
  },
  {
    id: 1001,
    year: 2003,
    make: "Ford",
    model: "Mustang",
    type: "Coupe",
    img: "https://fs7.fex.net/preview/4837828366/0x0",
    description:
      "Ford Mustang is a high-quality Coupe known for its reliability and performance.",
    fuelConsumption: "9.0",
    engineSize: "1.6L I4",
    accessories: ["Navigation system", "Sunroof", "Heated seats"],
    functionalities: [
      "Stability control",
      "Automatic emergency braking",
      "Tire pressure monitoring",
      "Rearview camera",
      "Bluetooth connectivity",
    ],
    rentalPrice: "$79",
    rentalCompany: "Luxury Car Rentals",
    address: "123 Example Street, Kiev, Ukraine",
    rentalConditions:
      "Minimum age: 25\nValid driver's license\nSecurity deposit required",
    mileage: 9770,
  },
  {
    id: 1002,
    year: 2002,
    make: "Honda",
    model: "Civic",
    type: "Hatchback",
    img: "https://fs6.fex.net/preview/4837827812/0x0",
    description:
      "Honda Civic is a high-quality Hatchback known for its reliability and performance.",
    fuelConsumption: "8.1",
    engineSize: "1.6L I4",
    accessories: [
      "Navigation system",
      "Leather seats",
      "Bose sound system",
      "Sunroof",
    ],
    functionalities: [
      "Rearview camera",
      "Tire pressure monitoring",
      "Automatic emergency braking",
      "Stability control",
    ],
    rentalPrice: "$59",
    rentalCompany: "Premium Auto Rentals",
    address: "456 Example Avenue, Lviv, Ukraine",
    rentalConditions:
      "Minimum age: 25\nValid driver's license\nSecurity deposit required",
    mileage: 40887,
  },
  {
    id: 1003,
    year: 2020,
    make: "Chevrolet",
    model: "Impala",
    type: "Sedan",
    img: "https://fs17.fex.net/preview/4837828332/0x0",
    description:
      "Chevrolet Impala is a high-quality Sedan known for its reliability and performance.",
    fuelConsumption: "10.2",
    engineSize: "3.0L I4",
    accessories: [
      "Navigation system",
      "Sunroof",
      "Leather seats",
      "Heated seats",
      "Bose sound system",
    ],
    functionalities: ["Bluetooth connectivity", "Tire pressure monitoring"],
    rentalPrice: "$84",
    rentalCompany: "Luxury Car Rentals",
    address: "789 Example Boulevard, Odessa, Ukraine",
    rentalConditions:
      "Minimum age: 25\nValid driver's license\nSecurity deposit required",
    mileage: 15037,
  },
  {
    id: 1000,
    year: 2011,
    make: "Toyota",
    model: "Camry",
    type: "Sedan",
    img: "https://fs8.fex.net/preview/4837827954/0x0",
    description:
      "Toyota Camry is a high-quality Sedan known for its reliability and performance.",
    fuelConsumption: "13.2",
    engineSize: "4.0L V6",
    accessories: [
      "Leather seats",
      "Sunroof",
      "Bose sound system",
      "Navigation system",
    ],
    functionalities: [
      "Bluetooth connectivity",
      "Tire pressure monitoring",
      "Rearview camera",
      "Stability control",
    ],
    rentalPrice: "$88",
    rentalCompany: "Elite Car Rentals",
    address: "123 Example Boulevard, Kharkiv, Ukraine",
    rentalConditions:
      "Minimum age: 25\nValid driver's license\nSecurity deposit required",
    mileage: 10289,
  },
  {
    id: 1001,
    year: 2003,
    make: "Ford",
    model: "Mustang",
    type: "Coupe",
    img: "https://fs7.fex.net/preview/4837828366/0x0",
    description:
      "Ford Mustang is a high-quality Coupe known for its reliability and performance.",
    fuelConsumption: "9.0",
    engineSize: "1.6L I4",
    accessories: ["Navigation system", "Sunroof", "Heated seats"],
    functionalities: [
      "Stability control",
      "Automatic emergency braking",
      "Tire pressure monitoring",
      "Rearview camera",
      "Bluetooth connectivity",
    ],
    rentalPrice: "$79",
    rentalCompany: "Luxury Car Rentals",
    address: "123 Example Street, Kiev, Ukraine",
    rentalConditions:
      "Minimum age: 25\nValid driver's license\nSecurity deposit required",
    mileage: 9770,
  },
  {
    id: 1002,
    year: 2002,
    make: "Honda",
    model: "Civic",
    type: "Hatchback",
    img: "https://fs6.fex.net/preview/4837827812/0x0",
    description:
      "Honda Civic is a high-quality Hatchback known for its reliability and performance.",
    fuelConsumption: "8.1",
    engineSize: "1.6L I4",
    accessories: [
      "Navigation system",
      "Leather seats",
      "Bose sound system",
      "Sunroof",
    ],
    functionalities: [
      "Rearview camera",
      "Tire pressure monitoring",
      "Automatic emergency braking",
      "Stability control",
    ],
    rentalPrice: "$59",
    rentalCompany: "Premium Auto Rentals",
    address: "456 Example Avenue, Lviv, Ukraine",
    rentalConditions:
      "Minimum age: 25\nValid driver's license\nSecurity deposit required",
    mileage: 40887,
  },
  {
    id: 1003,
    year: 2020,
    make: "Chevrolet",
    model: "Impala",
    type: "Sedan",
    img: "https://fs17.fex.net/preview/4837828332/0x0",
    description:
      "Chevrolet Impala is a high-quality Sedan known for its reliability and performance.",
    fuelConsumption: "10.2",
    engineSize: "3.0L I4",
    accessories: [
      "Navigation system",
      "Sunroof",
      "Leather seats",
      "Heated seats",
      "Bose sound system",
    ],
    functionalities: ["Bluetooth connectivity", "Tire pressure monitoring"],
    rentalPrice: "$84",
    rentalCompany: "Luxury Car Rentals",
    address: "789 Example Boulevard, Odessa, Ukraine",
    rentalConditions:
      "Minimum age: 25\nValid driver's license\nSecurity deposit required",
    mileage: 15037,
  },
];

const ContainerMain = styled.div`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  column-gap: 29px;
  row-gap: 50px;
`;

const Main = () => {
  const infoCarRent = data.map(
    ({
      id,
      year,
      make,
      model,
      type,
      img,
      rentalPrice,
      rentalCompany,
      mileage,
      functionalities,
      address,
    }) => {
      const option = functionalities[0];

      function getLastTwoWords(address) {
        const words = address.split(" ").filter((word) => word.length > 0);
        if (words.length < 2) {
          return ["not found", "not found"];
        }
        return words.slice(-2);
      }
      const city = getLastTwoWords(address)[0];
      const country = getLastTwoWords(address)[1];
      return {
        id,
        year,
        make,
        model,
        type,
        img,
        rentalPrice,
        rentalCompany,
        mileage,
        option,
        city,
        country,
      };
    }
  );
  return (
    <ContainerMain>
      {infoCarRent.map((item) => (
        <CardAuto key={item.id} data={item} />
      ))}
    </ContainerMain>
  );
};

export default Main;
