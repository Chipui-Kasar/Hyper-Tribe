$(document).ready(function () {
  var Events = ["3/8/2020", "12/8/2020", "3/9/2020", "12/9/2020", "21/9/2020"];
  $("#calendar").datepicker({
    format: "dd/mm/yyyy",
    autoclose: true,
    todayHighlight: true,
    beforeShowDay: function (date) {
      var d = date;
      var curr_date = d.getDate();
      var curr_month = d.getMonth() + 1; //Months are zero based
      var curr_year = d.getFullYear();
      var formattedDate = curr_date + "/" + curr_month + "/" + curr_year;

      if ($.inArray(formattedDate, Events) != -1) {
        return {
          classes: "activeEvents",
        };
      }
      return;
    },
  });
});
