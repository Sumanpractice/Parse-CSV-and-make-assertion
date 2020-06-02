const fs=require('fs');

fs.writeFile('foo.txt','bar', function(error)
{
    if(error){
        console.error(error);
    }
}


);