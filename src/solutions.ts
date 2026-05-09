//prb-1

function filterEvenNumbers(arr:number[]):number[]{
   return arr.filter(num=>num%2==0)

}

//prb-2
function reverseString(value:string):string{
    return value.split("").reverse().join("");
}


//prb-3
type StringOrNumber=string | number;

function checkType(value:StringOrNumber):StringOrNumber{
    if(typeof value=="string"){
        return "String"
    }
    else{
        return "Number"
    }
}

//prb-4 
function getProperty<T>(obj:T,key:keyof T):T[keyof T]{
    return obj[key]
}

//prb-5
interface Book{
    
  title:string;
  author: string;
  publishedYear: number
  
}

type isRead= boolean

const toggleReadStatus=(obj:Book)=>{
    return {...obj,isRead:true};

}

//prb-6


class Person{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

}

class Student extends Person{
    grade:string;

    constructor(name:string,age:number,grade:string){
        super(name,age);
        this.grade=grade
        
    }

    getDetails(){
        return `Name:${this.name},Age:${this.age},Grade:${this.grade}`
    }

}


//prb-7
const getIntersection=(value1:number[],value2:number[]):number[]=>{
   return  value1.filter(item=>value2.includes(item))
}

