export default function main() {
    let arr  = [22,42,1,8,90,66]
    for (let i = 0; i < arr.length; i++) {
        let min = i

        for (let j = i+1; j < arr.length; j++) {
            if(arr[min] > arr[j]){
                min = j
            }
        }

        let temp = arr[min]
        arr[min] = arr[i]
        arr[i] = temp

    }

   console.log(arr);
   
}