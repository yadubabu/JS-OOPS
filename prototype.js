//CONSTRUCTORS
function Book(title, author,year){
    //console.log('Book Initialized..');
    this.title=title;
    this.author=author;
    this.year=year;

    // this.getsummary=function(){
    //     return this.title+' was written by ' +this.author + ' in '
    //      + this.year;

    // }
}
//get prototype
// Book.prototype.getsummary=function(){
//     return this.title+' was written by ' +this.author + 'in'
//      + this.year;

// };

//getAge
// Book.prototype.getsummary=function(){
//     const years=new Date().getFullYear()-this.year;
//     console.log(years);
//     return this.title +' is ' + years + ' years old ';
// }

//Revise / change year
Book.prototype.revise=function(newYear){
   this.year=newYear;
   this.revised=true;
}
    
// Initiate an Object
// // const book1=new Book('Book One','John Deo','2013');
 const book2=new Book('Book Two','janne cio','2016');
// // console.log(book1.getsummary());
// console.log(book2.getsummary());

 console.log(book2);
 book2.revise('2018');
 console.log(book2);
