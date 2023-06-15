var main = function() {
    $('.notification img').on('click',function() {
      $('.notification-menu').toggle();
      $('.notification-badge').hide();
    });

    // ajax call to get list of notification
    function checkNewMessages(){
      return $.ajax({
          url: `${window.location.origin}/api/sga/sgasubmission`,
          type: 'GET',
          cache: false,
      });
    }

    //Checking for new messages every 5 seconds
    setInterval(checkNewMessages(totalMessages,5000));

    checkNewMessages().success(function (data) {
      console.log(`data.data - ${JSON.stringify(data.data)}`);
      console.log(`data.data - ${JSON.stringify(data)}`);
      if(data.success) {
        $.each(data.data.all_notifications, function (index, value) {
          $('.notification-badge').html(`${value.length}`);
          $('.notification-menu').append(` \
          <li id='menu-item-${index+1}'> \
            <img class="avatar" src="../static/images/letter.png" alt="avatar"> \
            <h3>Assignment ${value.assignment_name} submitted by ${value.student_username} for course ${value.course_name}</h3> \
            <p><button class="btn-mark-as-read">mark as read</button></p> \
          </li>`);
        });
      }
    }
    );
}
$(document).ready(main);