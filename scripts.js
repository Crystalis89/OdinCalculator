let buttoncontainer = document.getElementById('buttoncontainer')
let     idcheck = document.getElementById('equal')
let numbertext = document.getElementById('numbertext')


let math = []


buttoncontainer.addEventListener('click', (event) => {
   

    if (event.target.id === 'equalbutton' && math[0] !== '') {
    operate()
}

    
    if (event.target.id === 'clearbutton') 
    {
    math = []    
    numbertext.textContent=('0') 
    }
    

    
    if  (event.target.id !== 'equalbutton' && event.target.id !== 'clearbutton' ) 
    {
    matharray()
    }
    
 }

)



function operate() {



    let joined = math.join('');
    let split = joined.split(' ');
    let spliced = split.splice(0, 3)

    let looplength = split.length
    let start1 = spliced[0] //first number
    let start2 = spliced[1] //operator
    let start3 = spliced[2] //second number
    let i = 0
    let calc = 0
    let parsed= 0
            start1 = parseInt(start1)

            start3 = parseInt(start3)


    if (calc === 0) {

        if (start2 === '/') {
            calc = start1 / start3
            } 
            
        if (start2 === '*') {
                calc = start1 * start3 ;
                }
        
        if (start2 === '-') {
                calc = start1 - start3
             
        
            }
        if (start2 === '+') {

                calc = start1 + start3
                           
            }
         
  
     if (calc > 0)  {
       
        for (i = 0; i < looplength; i++) {
            let loopsplice = split.splice(0, 2)
            console.table(loopsplice)
       
            calc = parseInt(calc)
            parsed = parseInt(loopsplice[1])

    

            if (loopsplice[0] === '/') {
                calc = calc / parsed

                } 
                
            if (loopsplice[0] === '*') { console.log(typeof(parsed))
            
                    calc = calc * parsed ;
                    }
            
            if (loopsplice[0] === '-') {
                    
                    calc = calc - parsed
                }
            if (loopsplice[0] === '+') {
                 
                    calc = calc + parsed
                    } 

            }
        }
    }

        let result = Math.round(calc * 100) / 100

        numbertext.textContent=(result)
        math = [] 
}

function matharray() {

 
    math.push(event.target.value)

    let displaynum = math.join('')
    numbertext.textContent=(displaynum)
}