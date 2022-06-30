export default function main(params) {
     let arr = [10,290,80,7,100,200,300,150,270,67]
     let max = -Infinity
     let secondMax = -Infinity

     for (const elem of arr) {
         if(elem > max){
            secondMax = max
            max = elem
         } else {
            if(elem > secondMax){
                secondMax = elem
            }
         }
     } 

   

    console.log(secondMax);
    
}