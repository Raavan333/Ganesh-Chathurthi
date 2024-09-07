let a = document.getElementById("footer");
let b = ['Lalitha K', 'Venkatesh S V', 'Radhika A', 'Dayananad Babu', 'Vamshi S V', 'Bharaneesh Y D', 'Abhishek Y D','LOVE U ALL'];
        
function printArrayWithDelay(arr, delay) {
       arr.forEach((item, index) => {
        setTimeout(() => {
            a.textContent = item; // Update textContent property
        }, delay * index); // Multiply delay by the index to stagger the prints
    });
}

printArrayWithDelay(b, 4000);
