$("#fox1").text('Macrotis');
$("#fox2").css('border-color', 'purple');
$("p").css('background-color','yellow')

let szin='pink';
if (szin='pink'){
    $("#fox3").css('background-color', 'pink');
}
let szam=101
if (szam>100){
    $("#fox2").text('Wow, de nagy szam');
}
else{
    $("#fox2").text('ez csak egy normalis szam...');
}

$('body').append(
    '<h1>Hello World!</h1>'
  );

  let myArray = ['Johny Filpo', 'Claire', 'Mark', 'Susan'];
  myArray.forEach(element => {
    $('body').append(
        element      );
  });
