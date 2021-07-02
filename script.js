var randomValue = Math.floor(Math.random() * 3);

function checkWinner(value) {
  if (Number(randomValue) === Number(value)) {
    document.getElementById("winLose").innerHTML = "Congratulations !!! You guessed the button !";
    document.getElementById("winLose").style.visibility = "visible";
    $('.button').attr('disabled', 'disabled');
    document.getElementById("refresh").style.visibility = "visible";
  } else {
    document.getElementById("winLose").innerHTML = "Sorry ! This button is not a winner! Please try again!";
    document.getElementById("winLose").style.visibility = "visible";
    $('.button').attr('disabled', 'disabled');
    document.getElementById("refresh").style.visibility = "visible";
  }
  return false;
}

function refreshPage() {
  window.location.reload();
  return false;
}