const analyzeArray = (array) => {

    const tempObject = {};

    const getMax = (a, b) => Math.max(a, b);

    const getMin = (a, b) => Math.min(a, b);
    
    let sum = 0; 
    array.forEach(element => {
      sum += element;  
    });

    tempObject['average'] = sum / array.length;
    tempObject['max'] = array.reduce(getMax);
    tempObject['min'] = array.reduce(getMin);
    tempObject['length'] = array.length; 

    return tempObject;
}

export { analyzeArray };