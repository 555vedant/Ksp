document.getElementById('predictButton').addEventListener('click', function() {
    // Send an AJAX request to predict route on button click
    fetch('/predict')
      .then(response => response.json()) // Parse response as JSON
      .then(data => {
        // Update UI with prediction results from 'data'
        console.log("Prediction:", data);
        // You can modify the DOM to display the prediction data here
      })
      .catch(error => {
        console.error("Error:", error);
        // Handle errors appropriately, e.g., display an error message
      });
  });
  