import { Person } from './person.model';

describe("Test for Person", ()=>{

  describe("Test for person.getFullName", ()=>{

   it("should return an string with name + lastname", ()=>{
     let person = new Person("Nicolas", "Molina", 24);
     expect(person.getFullName()).toEqual("Nicolas Molina");
   });
  });

  describe("Test for person.getAgeInYears", ()=>{

   it("should return '34' years", ()=>{
     let person = new Person("Nicolas", "Molina", 24);
     let age = person.getAgeInYears(10);
     expect(age).toEqual(34);
   });

  it("should return '20' years", ()=>{
     let person = new Person("Nicolas", "Molina", 20);
     let age = person.getAgeInYears(15);
     expect(age).toEqual(35);
  });

  it("should return '20' years with negative number", ()=>{
     let person = new Person("Nicolas", "Molina", 28);
     let age = person.getAgeInYears(-10);
     expect(age).toEqual(28);
  });
 });
});