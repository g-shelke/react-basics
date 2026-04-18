import { faker } from "@faker-js/faker";
import fs from "fs";

const USERS = 1000;


// Users
const users = Array.from({ length: USERS }, (_, i) => ({
  id: i + 1,
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email().toLowerCase(),
  phone: `+91-${faker.helpers.arrayElement(['6','7','8','9'])}${faker.string.numeric(9)}`,
  address: faker.location.streetAddress(),
  zipCode: `41${faker.string.numeric(4)}`,
  role: i < 2 ? "admin" : "user",
  password: faker.string.alphanumeric(6)
}));

fs.writeFileSync(
  "db.json",
  JSON.stringify({ users }, null, 2)
);
