const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos";

const apiKey = "ohE4jxA9hmDUgi3xuUXaReEBu7tdpVRQbjiQD0gJ";

const date = "2021-06-09";
const days = 10;

let [year, month, day] = date.split('-');
	
// month - 1 as month in the Date constructor is zero indexed
const now = new Date(year, month - 1, day);

let loopDay = now;

fetch(`${url}?earth_date=${date}&api_key=${apiKey}`)
.then(res=>res.json())
.then(data=>{console.log( data.photos[0].earth_date, [data.photos[0].img_src,data.photos[1].img_src,data.photos[2].img_src] )});

for (let i = 1; i < days; i++) {
    loopDay.setDate(loopDay.getDate() - 1);
    loopDay = loopDay.toISOString().split('T')[0]
    
    fetch(`${url}?earth_date=${loopDay}&api_key=${apiKey}`)
    .then(res=>res.json())
    .then(data=>{console.log( data.photos[0].earth_date, [data.photos[0].img_src,data.photos[1].img_src,data.photos[2].img_src] )});


    loopDay = [year, month, day] = loopDay.split('-');
    loopDay = new Date(year, month - 1, day);  
}


