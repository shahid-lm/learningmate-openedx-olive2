$(document).ready(function () {
  // ajax call to get list of notification
  function checkNewMessages() {
    return $.ajax({
      url: `${window.location.origin}/api/sga/sgasubmission`,
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      type: "GET",
      cache: false,
      success: function (data) {
        if (data.all_notifications.length > 0) {
          $(".notification-badge").html(`${data.all_notifications.length}`);
          $(".notification-menu").empty();
          $.each(data.all_notifications, function (index, value) {
            $(".notification-menu").append(` \
            <li class='menu-item-${value.id}'> \
              <img class="avatar" src="../static/images/letter.png" alt="avatar"> \
              New submission for course <h3>[${value.course_name}]</h3> assignment name <h3>[${value.assignment_name}]</h3> submitted by <h3>[${value.student_username}]</h3> \
              <p><button class="btn-mark-as-read">mark as read</button></p> \
            </li>`);
          });
        }
        else {
          $(".notification-badge").hide();
        }
        
      },
      error: function (xhr, status, error) {
        alert("Error!" + xhr.status);
      },
    });
  }
  setInterval(function(){checkNewMessages()}, 60000);

  // Dropdown menu actions
  $(".notification img").on("click", function () {
    $(".notification-menu").toggle();
    $(".notification-badge").hide();
  });
});