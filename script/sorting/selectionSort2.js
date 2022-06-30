export default function main() {
    console.log("Heyyy");
    let array = [5,3,6,2,10]
    let newArr = []


    for (let index = 0; index < array.length; index++) {
       let smallestIndex =  smallest(array)
       newArr.push(array[smallestIndex])
       array.splice(smallestIndex, 1)
    }
    
    console.log(newArr);


    function smallest(arr) {
        console.log(arr);
        let smallest = arr[0]
        let smallestIndex =  0       
        for (let i = 0; i < arr.length; i++) {
            let element = arr[i]
            if(smallest > element){
                smallest = element
                smallestIndex = i
            }
        }
        return smallestIndex
    }


}


