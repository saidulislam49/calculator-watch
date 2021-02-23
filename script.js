
function allClear(){
    var firstNumber = document.getElementById('first_number').innerText = 0
    var secondNumber = document.getElementById('second_number').innerText = 0
    var cinho = document.getElementById('sign').innerText = ''
    var folafol = document.getElementById('result_is').innerText = 0
}

    function writeNumber(number){
        var iconS = document.getElementById('sign').innerText 

        if( number == '+' || number == "-" || number == '/' || number == 'X'){
            document.getElementById('sign').innerHTML = number

            return
        }

        if(iconS == ''){
             var prothomNum = document.getElementById('first_number').innerText
             if( prothomNum == 0 ){
                document.getElementById('first_number').innerText = number
             }else{
                document.getElementById('first_number').innerText += number
             }
        }
        else{
            var ditioNum = document.getElementById('second_number').innerText
            if(ditioNum == 0){
                document.getElementById('second_number').innerText = number
            }else{
                document.getElementById('second_number').innerText += number
            }
        }
    }

    function resultThesum(){
        var prothom = Number(document.getElementById('first_number').innerText)
        var ditio = Number(document.getElementById('second_number').innerText)
        var chinno = document.getElementById('sign').innerText

          var  result = 0
        switch(chinno){
            case '+' :
                result = prothom + ditio
                break
            case '-' :
                result = prothom - ditio
                break
            case '/' :
                result = prothom / ditio
                break
            case 'X' :
                result = prothom * ditio
                break
            default : result = 0
        }
        document.getElementById('result_is').innerText = result
    }














































































































































































// function allClear(){ 
//     document.getElementById('first_number').innerText = 0
//     document.getElementById('sign').innerText = ''
//     document.getElementById('second_number').innerText = 0 
//     document.getElementById('result_is').innerText = 0 
// }

// function writeNumber(sonkha){

//    var cinnho =  document.getElementById('sign').innerText

//    if(sonkha == '+' || sonkha == '-' || sonkha == '/' || sonkha == 'X'){
//        document.getElementById('sign').innerText = sonkha

//        return
//    }

//    if( cinnho == ''){
//        var first_value = document.getElementById('first_number').innerText

//        if( first_value == 0){
//             document.getElementById('first_number').innerHTML = sonkha
//        }
//        else{
//            document.getElementById('first_number').innerHTML += sonkha
//        }
       
//    }
//    else{
//        var second_value = document.getElementById('second_number').innerText

//        if( second_value == 0 ){
//            document.getElementById('second_number').innerHTML = sonkha
//        }
//        else{
//            document.getElementById('second_number').innerHTML += sonkha
//        }
//    }


// }

//     function resultThesum(){
//         var firstNum = Number(document.getElementById('first_number').innerText)
//         var secondNum = Number(document.getElementById('second_number').innerText)
//         var cinho = document.getElementById('sign').innerText

//         var result = 0
//         switch(cinho){
//             case '+':
//                 result = firstNum + secondNum
//                 break
//             case '-' : 
//                 result = firstNum - secondNum
//                 break
//             case '/' :
//                 result = firstNum / secondNum
//                 break
//             case 'X' : 
//                 result = firstNum * secondNum
//                 break
//             default : result = 0 
//         }
//         document.getElementById('result_is').innerText = result
//     }