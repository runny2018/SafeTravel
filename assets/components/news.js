

export async function getNews() {
    var res;
    axios.get('https://api.smartable.ai/coronavirus/news/IN', {
        headers: {
            'Subscription-Key': '429058f92b3246ae9b8ad1cd88daee46',
        },
        method: 'get'
    })
        .then(function (response) {
            // handle success
            res = response.data.news
            console.log(response.data.news)      //response.request._response
        })
        .catch(function (error) {
            // handle error
            console.log(error);

        })
        .then(function () {
            // always executed
        });

    return res


}