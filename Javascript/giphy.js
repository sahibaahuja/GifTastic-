

var topics = ["Icecream", "Pizza", "Fries", "Cheese"];

function displayfoods() {
    var topic = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&rating=g&apikey=rO72p8HGzpSH8quV94BcUD5y4jBFEyq9";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data;
        for (var i = 0; i < 10; i++) {
            var div = $("<div>")
            var span = $("<span>")
            var img = $("<img>")
            img.attr("src", response.data[i].images.fixed_height.url)
            var rating = results[i].rating;
            div.text(rating)
            span.append(div)
            span.append(img); 
            $("#rating-view").append(span)

        }

        });
}

$(document).on("click", ".topic", displayfoods);

function renderButtons() {
    $("#foods-view").empty();
    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("topic");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#foods-view").append(a);
    }
}

renderButtons()

$("#add-food").on("click", function (event) {
    event.preventDefault();
    var topic = $("#food-input").val().trim();
    topics.push(topic);
    renderButtons();
});

 