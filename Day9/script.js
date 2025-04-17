function showGreeting() {
    const hour = new Date().getHours();
    let message = "Hello!";
  
    if (hour < 12) {
      message = "Good morning!";
    } else if (hour < 18) {
      message = "Good afternoon!";
    } else {
      message = "Good evening!";
    }
  
    alert(message);
  }
  