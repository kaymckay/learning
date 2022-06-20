


function bubbleSort(arr) {
    if (arr.length <= 1) {
        return arr
    }

    let l = 0, r = 1
    let swapped = false
    while (r < arr.length) {
        if (arr[l] > arr[r]) {
            let temp = arr[l]
            arr[l] = arr[r]
            arr[r] = temp
            swapped = true
        }
        ++l
        ++r
        if (r === arr.length && swapped) {
           l = 0
           r = 1
           swapped = false
        }
    }

    return arr
}

function selectionSort(arr) {
    if (arr.length <= 1) {
        return arr
    }

    let s = 0, min = 1
    while (s < arr.length - 1) {
        let min = s
        for (let u = s + 1; u < arr.length; u++) {
            if (arr[u] < arr[min]) {
                min = u
            }
        }
        let temp = arr[min]
        arr[min] = arr[s]
        arr[s] = temp
        s++
    }


    return arr
}

function insertionSort(arr) {
    if (arr.length <= 1) {return arr}

    let key, x;
    for (let i = 1; i < arr.length; i++) {
        key = arr[i]
        x = i - 1
        // shift elements over & insert key to proper place of sorted array
        while (x >= 0 && arr[x] > key) {
            arr[x + 1] = arr[x]
            --x
        }
        arr[x+1] = key

    }

    return arr
}

function mergeSort(arr, l, r) {
    if (l >= r) {return}
    let m = l + parseInt((r - l) / 2)
    mergeSort(arr, l, m)
    mergeSort(arr, m+1, r)
    merge(arr, l, m, r)
    return arr
}

function merge(arr, l, m, r) {
    var newArr = new Array()
    let left = arr.slice(l, m + 1)
    let right = arr.slice(m + 1, r + 1)

    let x = 0, y = 0, i = l  
    while (x < left.length && y < right.length) {
        if (left[x] > right[y]) {
            arr[i] = right[y]
            y++
        }else {
            arr[i] = left[x]
            x++
        }
        ++i
    }

    while (x < left.length) {
        arr[i] = left[x]
        ++x
        ++i
    }
    while (y < right.length) {
        arr[i] = right[y]
        ++y
        ++i
    }
}

function quickSort(arr, low, high) {
    if (low >= high) {return}
    pi = partition(arr, low, high)
    quickSort(arr, low, pi - 1)
    quickSort(arr, pi + 1, high)
    return arr
}
function partition(arr, low, high) {
    pivot = arr[high]
    let i = low

   for( let x = low; x < high; x++) {
        if(arr[x] < pivot) {
            let temp = arr[x]
            arr[x] = arr[i]
            arr[i] = temp
            i++
        }
   }

    let temp = arr[i]
    arr[i] = arr[high]
    arr[high] = temp
    return i
}

function heapSort(arr, n) {
    if (arr <= 1) {return arr}
    
    // build heap, heapify from bottom parents up
    for( var i = Math.floor(n/2) - 1; i >=0; i--){
        heapify(arr, n, i)
    }

    // Extract element from heap
    for(var i = n - 1; i > 0; i--) {
        // swap it with last item & heapify rest of array
        swap(arr, 0, i)
        heapify(arr, i, 0)
    }

    return arr
}

function heapify(arr, n, i) {
    let left = 2*i + 1
    let right = 2*i + 2
    let largest = i

    if (left < n && arr[left] > arr[largest]) {
        largest = left
    }else if (right < n && arr[right] > arr[largest]) {
        start = right
    }

    if (largest != i) {
        swap(arr, i, largest)
        heapify(arr, n, largest)
    }
}

function swap(arr, x, y) {
    let temp = arr[x]
    arr[x] = arr[y]
    arr[y] = temp
}

function countingSort(arr) {
    // find max and create count arr size max + 1 with zeros, or limit range
    let count =  Array.from({length: Math.max(...arr) + 1}, (_,i) => 0)
    let output = Array.from({length: arr.length})
    arr.forEach(x => {
        count[x] += 1
    })

    let sum = 0
    count.forEach((x, i) => {
        sum = sum + x
        count[i] = sum
    })

    arr.forEach(x => {
        let c = count[x] - 1
        count[x] -= 1
        output[c] = x
    })

    return output
}

function radixSort(arr) {

}

// driver
function main () {

    var arr = [5,6,2,4,1,9,3,10]
    // console.log(bubbleSort(arr))
    // console.log(selectionSort(arr))
    // console.log(insertionSort(arr))

    var arr2 =[5, 1, 4, 2, 8]
    // console.log(bubbleSort(arr2))

    var arr3 = [38, 27, 43, 3, 9, 82, 10]
    //console.log(mergeSort(arr3, 0, arr3.length - 1))

    var arr4 = [10, 80, 30, 90, 40, 50, 70]
    // console.log(quickSort(arr4, 0, arr4.length - 1))

    var arr5 = [4, 10, 3, 5, 1]
    // console.log(heapSort(arr5, arr5.length))

    var arr6  = [1, 4, 1, 2, 7, 5, 2]
    // console.log(countingSort(arr6))

    console.log(radixSort(arr6))

}


main()