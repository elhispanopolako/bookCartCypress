import { faker } from '@faker-js/faker';
class RandomData {
  getName() {
    return faker.name.firstName();
  }
  getLastname() {
    return faker.name.lastName();
  }
  getUsername() {
    return faker.internet.userName() + Math.floor(Math.random() * 1000);
  }
  getEmail() {
    return faker.internet.email()
  }
  getPassword() {
    return faker.internet.password(20, false, /[A-Za-z0-9]/);
  }
  getGender() {
    let sex = faker.name.sex()
    return sex.charAt(0).toUpperCase() + sex.slice(1)
  }

}
export default RandomData;
