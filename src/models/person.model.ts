export class Person{

  constructor(
   public name: string,
   public lastname: string,
   public age: number
  ){}

  getFullName(): string{
   return `${this.name} ${this.lastname}`; 
  }

  getAgeInYears( years: number ): number{
    if( years > 0 ){ 
      return this.age + years;
    }
    return this.age;
  }
}