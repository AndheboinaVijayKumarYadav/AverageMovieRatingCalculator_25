const collection_ratings = () => {
    console.log('Function called')
    /* Creating a object */
    const ratings = {'count': 0,'sum':0,'average':0};

    let rating =0;
    const elements = document.querySelectorAll('.rating');
    /* console.log(elements); */
    elements.forEach((element) => {
        rating = parseInt(element.id.replace('star',''));
        ratings.count += parseInt(element.value);
        ratings.sum += parseInt(element.value) * rating;
    })
  
    if(ratings.count !== 0){
        ratings.average = ratings.sum / ratings.count ;
        console.log(ratings.average)
    }

    return ratings;
}


document.addEventListener('change', () => {
    /* calling the collection_ratings functiona and storing it in the rating variable */
    const ratings = collection_ratings();
     /* updating the values of the average input field */
    document.getElementById('average').value = ratings.average;
});