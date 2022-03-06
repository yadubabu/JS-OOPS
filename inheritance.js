function Book(title, author,year){
    //console.log('Book Initialized..');
    this.title=title;
    this.author=author;
    this.year=year;
}
//get summery
Book.prototype.getsummery=function(){
    return this.title+' was written by ' +this.author + 'in'
    + this.year;

};

//Magazine constructor
function magazine(title,author,year,month){
    Book.call(this,title,author,year);
    this.month=month;
}

//Inherit Prototype
magazine.prototype=Object.create(Book.prototype);

//Instantiate Magazine Object
const mag1=new magazine('mag one','john deo','2018','jan');
console.log(mag1.getsummery());

//Use Magazine Constructor
magazine.prototype.constructor=magazine;

console.log(mag1);
