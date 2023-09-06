function drawTriangle(triangleSize) {

    // Your solution goes here
    for (let index = 1; index <= triangleSize; index++) {
        let star = "";
       for (let j = 1; j <= index; j++) {
        star = star + "*"
        
       }
      console.log(star);  
    }
 }

 drawTriangle(4);