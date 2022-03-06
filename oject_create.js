//Object of protos
const bookprotos={
    getsummery:function(){
        return this.title+' was written by ' +this.author + 'in'
        + this.year;
    
    },
    getage:function(){
const years=new Date().getFullYear()-this.year;
//     console.log(years);
return this.title +' is ' + years + ' years old ';
 }
}

///Create Object
// const book1=Object.create(bookprotos);
// book1.title='Book One';
// book1.author="john die";
// book1.year='2013';

const book1=Object.create(bookprotos,{
    title:{value:'Book One'},
    author:{value:'john duo'},
    year:{value:'2013'}
});
console.log(book1);