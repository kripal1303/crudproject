$(()=>{
    let showBtn =$('#show');
    console.log("hello");

    showBtn.click((e)=>{
        e.preventDefault();
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps",
            "method": "GET",
            "headers": {
                "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
                "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com"
            }
        };
        
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    })
})