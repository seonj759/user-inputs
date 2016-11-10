$(function() {
  //All JS goes within these brackets

  //Registration calculator
  $("#bmi-submit").click(function() {
    var bmiString = $("#bmi").val();
    var bmi = parseInt(bmiString);

    if (bmi >= 30) {
      $('#result').text('Obese');
    } else if (bmi >= 25 && bmi < 30) {
      $('#result').text('Overweight');
    } else if (bmi >= 18.50 && bmi <= 24.99) {
      $('#result').text('Normal Range');
    } else if (bmi < 18.50) {
      $('#result').text('Underweight');
    }
  });
});
