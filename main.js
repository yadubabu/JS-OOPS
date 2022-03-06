// const s="hello";
// console.log(typeof s);

// const s2=new String("hello");
// console.log(typeof s2);

//console.log(window);
//alert(1);
//console.log(navigator.appVersion);

//Object Literal
 const book1={
     title:"Book One",
     author:"john Deo",
     year:'2013',
     getsummery:function(){
         return this.title+' was written by ' +this.author+ 'in' +this.year;
     }
 };
console.log(book1.getsummery());
const book2={
    title:"Book Two",
    author:"Jane Deo",
    year:'2016',
    getsummery:function(){
        return this.title+' was written by ' +this.author+ 'in' +this.year;
    }
};
console.log(book2.getsummery());
console.log(Object.values(book1));
console.log(Object.keys(book1));



