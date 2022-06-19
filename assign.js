arr1=["biryani","qorma","karahi","beef pulao","tikka","fried chicken"];

arr2=["cold drink","salad","chapati","naan","soop","raita"];
var a=prompt("Enter name of dish you want to find: ");
for ( i=0;i<arr1.length;i++){
    
    if (a==arr1[i]){
        document.write(" Yes "+a+" is available"+"<br>");
        document.write("We have these side orders also: "+"<br>");
        for (j=0;j<arr2.length;j++){
            document.write(arr2[j]+"<br>");
        }
        break
    }
    else if (a!=arr1[i]){
        document.write("Sorry! "+a+" is not available.."+"<br>");
    document.write("The menu of our restaurant is shown below: "+"<br>");
    for (k=0;k<arr1.length;k++){
        document.write(arr1[k]+"<br>");
    }
    }
    break
}


