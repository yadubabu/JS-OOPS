//CONSTRUCTORS
function Book(title, author,year){
    //console.log('Book Initialized..');
    this.title=title;
    this.author=author;
    this.year=year;

    this.getsummary=function(){
        return this.title+' was written by ' +this.author + 'in'
         + this.year;

    }
}


//Initiate an Object
const book1=new Book('Book One','John Deo','2013');
const book2=new Book('Book Two','janne cio','2016');
console.log(book1.getsummary());

// console.log(book1.title);
// console.log(book1.author);
