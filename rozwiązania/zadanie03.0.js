var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
    ];

    function checkArray(arr) {
        const result = [];

        for (let i = 0; i <arr.length; i++) {
            const insideArr = arr[i];
            console.log (insideArr);
            const evenElement = insideArr.find(el => el%2 !=0);
            
            if(evenElement){
                result.push(false);
            } else {
                result.push(true);
            }
        }
        return result;
    }

    checkArray(
       [
         [11, 12],
        [42, 2],
        [-4, -120],
        [0, 0],
        [1, 34],
        ]
    )