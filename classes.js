class Book {
    constructor(title,author,year){
        this.title=title;
        this.author=author;
        this.year=year;
    }
    getsummery(){
        return this.title+' was written by ' +this.author + 'in'
        + this.year;
    }
    getage(){
        const years=new Date().getFullYear()-this.year;
        //     console.log(years);
        return this.title +' is ' + years + ' years old ';
         }
    revise(newYear){
        this.year=newYear;
        this.revised=true;
    }
    static topbookstore(){
        return 'Barnes & Noble';
    }
}

//Instantiate Object
const book1=new Book('Book One','John Due','2013');

// console.log(book1);
// book1.revise('2019');
// console.log(book1);

console.log(Book.topbookstore());