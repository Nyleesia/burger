// Create AJAX calls to the routes in a function to wait for page load (document ready)
$(function () {

  // Call to create a burger
    $(".createBurger").on("submit", (e) => {
      e.preventDefault();
  
      // Instantiate values for the new burger and send a post request to add it to the database
      let newBurger = {
        burgerName: $("#newBurger")
          .val()
          .trim(),
        devoured: 0
      };
      $.ajax("/create", {
        type: "POST",
        data: newBurger
      }).then(() => {
        console.log(`A new burger, ${newBurger}, has been added`);
        location.reload();
      });
    });
  
    // On click event to capture a burger when eaten
    $(".eatBurger").click( (e) => {
      e.preventDefault();

      // Send put request to update the burger to state = devoured
      let id = $(e.currentTarget).data("id");
      let devouredState = {
        devoured: 1,
        id: id
      };
      $.ajax(`/update/${id}`, {
        type: "POST",
        data: devouredState
      }).then(() => {
        console.log(`This ${devouredState} has been devoured`);
        location.reload();
      });
    });
  
    $(".removeBurger").on("click", (e) => {
      e.preventDefault();

     // Use id to send request to delete a burger
      let id = $(e.currentTarget).data("id");
      $.ajax({
        type: "DELETE",
        url: (`/delete/${id}`)
      }).then(location.reload());
    });
  });