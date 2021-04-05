var str = "Ослик Иа-Иа посмотрел на виадук"; // ищем в этой строке
var target = "Иа"; // цель поиска
var result = '';


console.log(str.length);
for (var i = 0; i < str.length; i++) {
    var count = 0;
    var sign = '';
    for (var y = 0; y <str.length; y++){
        if (str[i] === str[y]) {
            sign += str[i];
            count++;
            if (count >= 2) {break;}
        }
    }
    if (count > 1){
        result += '(';
    } else {
        result += ')';
    }
    console.log( 'Sign=' + sign + ' Count=' + count );  
}
console.log(result);


/*while ((pos = str.indexOf(target, pos + 1)) != -1) {
  count =+1;
  console.log( pos );
}
console.log( count );
*/