
var names = new Array();
names[0] = "Peter";
names[1] = "Jean";
names[2] = "John";
names[3] = "Frank";
names[4] = "jack";
names[5] = "johny";
names[6] = "Tom";
names[7] = "Sabina";
names[8] = "Alina";
names[9] = "Martin";

for (var i = 0; i <names.length; i++)
{
    if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
    console.log("Goodby"+ names[i]);
}
    else{
        console.log("Hello"+names[i])
    }
    
}