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
    
}

//Magazine Subclass
class Magazine extends Book {
    constructor(title,author,year,month){
        super(title,author,year);
        this.month=month;
    }
}

//Instantiate magazine
const mag1=new Magazine('Mag one','john due','2013','jan');

console.log(mag1);
console.log(mag1.getsummery());