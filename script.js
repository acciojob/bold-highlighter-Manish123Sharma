function highlight() {
    //Write your code here
const boldWords = document.querySelectorAll('strong');
    boldWords.forEach(element => {
        element.style.color = 'rgb(0, 128, 0)'; // Green
    });

}


function return_normal() {
    //Write your code here
const boldWords = document.querySelectorAll('strong');
    boldWords.forEach(element => {
        element.style.color = 'rgb(0, 0, 0)'; // Black
    });
    
}
