$(document).ready(function () {
  try {
    // hide notification till the ajax response is received
    $(".notification-badge").hide();
    // show notification on first load
    checkNewNotifications();
    // ajax call to get list of notification
    function checkNewNotifications() {
      return $.ajax({
        url: `${window.location.origin}/api/sga/sgasubmission`,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        type: "GET",
        cache: false,
        success: function (data) {
          if (data.all_notifications.length > 0) {
            $(".notification-badge").show();
            $(".notification-badge").html(`${data.all_notifications.length}`);
            $(".notification-menu").empty();
            $.each(data.all_notifications, function (index, value) {
              $(".notification-menu").append(` \
            <li id='menu-item-${value.id}' class='notification-menu-item'> \
              <img class="avatar" src="../static/images/letter.png" alt="avatar"> \
              New submission from [${value.student_username}] for course [${value.course_name}]  \
              <p><button class="btn-mark-as-read">mark as read</button></p> \
            </li>`);
            });
          } else {
            $(".notification-badge").hide();
            $(".notification-menu").empty();
          }
        },
        error: function (xhr, status, error) {
          console.log(`Error!! ${err.Message}`);
        },
      });
    }
    // call every 15 seconds
    setInterval(function () {
      checkNewNotifications();
    }, 15000);

    // Dropdown menu actions
    $(".notification img").on("click", function () {
      $(".notification-menu").toggle();
      $(".notification-badge").hide();
    });

    // Delete mark as read notfications
    $(".notification-menu").on("click", "li button", (event) => {
      // remove mark-as-read element from DOM
      $(event.target).closest("li").remove();
      // remove mark-as-read notification from openedx database
      const selectedElementId = $(event.target.closest("li")).attr("id");
      const notificationId = parseInt(selectedElementId.slice(-1));
      $.ajax({
        url: `${window.location.origin}/api/sga/delete_sgasubmission/${notificationId}`,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        type: "POST",
        cache: false,
        success: function (data) {
          console.log(`Deleted notification ${notificationId}`);
        },
        error: function (xhr, status, error) {
          console.log(`Error!! ${err.Message}`);
        },
      });
    });
  } catch (err) {
    console.log(err.message);
  }
});
