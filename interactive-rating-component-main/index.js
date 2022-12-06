var rateNumber;

// Remove shadow on button clik
$(".btn").click(function () {
    $(this).css("box-shadow", "none")
})

//Get selected rate number and change button background for select effect on click
$(".rate-btn .rate").click(function () {
    // console.log($(this).text())
    rateNumber = $(this).text()
    $(this).addClass("rate-click")
    const btn = $(this)
    setTimeout(function () {
        btn.removeClass("rate-click")
    }, 1500)
})

//Display thank you page when user submit a valid rate number
$("#submitBtn").click(function () {
    if (!rateNumber) {
        alert("Please select a rate number")
    } else {
        $("#rate-stage").toggle();
        $("#thank-you-stage").toggle();
        $(".rate-info").text("You selected " + rateNumber + " out of 5")
    }
    // console.log(rateNumber)
})