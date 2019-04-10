
var searchTerm = "katy";
        var numRecords = "";
        var startYear = "";
        var endYear = "";

        

        function makeRequest() {
            var apiKey = 'lT0pCl6e6gbU469C5M2GDx3hoJvNgQPG';
            var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
            url += 'api-key=' + apiKey;
            url += '&q=' + searchTerm;

            $.ajax({
                url,
                method: "GET"
            }).then(function (response) {
                console.log(response)
                for (var i = 0; i < response.response.docs.length; i++) {
                    console.log(response.response.docs[i])
                }
            })
        }
        makeRequest()

