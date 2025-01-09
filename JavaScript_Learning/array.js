//  arrays in js is like list in python

data =  ['Python', 'SQL', 'Excel','Song', 'JS','Naruto'] ;
type = ['Code', 'Code', 'Tool','Music', 'Code','Anime'] ;

size_of_data = data.length ;

for (i = 0 ; i < size_of_data; i = i + 1){
    if (type[i] == 'Code'){
        console.log(`${data[i]} is coding Langauge`)
    }
    else{
        console.log(`${data[i]} is ${type[i]}`)
    }
}