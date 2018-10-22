
/******************
 * 01 - Declaration
 ******************/
//variable name          type           value
 let username:         string       ="instructor";
//  let password:         string       = "Letmein123!";
 let instructorId:     number       = 5;

let isDog: boolean;
let email:string;
// let age:number;

let greeting = "Hello";

let password:string;
// password = 1234




/*****************
 * 02 - Basic Types
 *******************/
//numbers
let age: number =40;
let currentYear:number = 2018;

// octal literals
let decimal: number = 6;
let hex:number = 0xf00d;
let binary : number = 0b1010;

// strings
let me: string= "Autumn"

//bool

let isSoCool: boolean= true;

//Array 

let stuffILike:string[];

let nums : Array<number> = [];

//tuple
let userInfo: [number, string];

userInfo= [1, "hey" ];

function newFunc ():void {
    console.log('this is someting')
};

const newer=():string => "New thing"




/****************
 * 03 - Union Types
 ****************/

 let options:number | null = 2
