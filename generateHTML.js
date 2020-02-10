
const colors = {
  beige: {
    work: "#E6E1C3"
  },
  blue: {
    work: "#7e80af"
  },
  pink: {
    work: "#caa1d4"
  },
  ceramic: {
    work: "#916051"
  }
};

function generateHTML(data) {
  return `<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap" rel="stylesheet">
      <script>
        // do some calculations or something async
        setTimeout(function() {
          window.ELECTRON_HTML_TO_READY = true; // this will start the conversion
        }, 500);
    </script> 
      <title>developer profile</title>
      <style>
        body{
          font-family: 'Nanum Gothic', sans-serif;
          background-color: ${colors[data.favcolor].work};
        }
        ul{
          padding: 0;
        }
        li{
          list-style: none;
        }
        h1, h2, h3, h4 p {
          font-family: 'Nanum Gothic', sans-serif;
          font-weight: 200;
          margin: 0;
        }
        h1 {
        font-size: 30pt;
        padding: 15px 0;
        }
        h2 {
        font-size: 18pt;
        padding: 10px 0;
        }
        p {
        font-size: 16pt;
        margin: 5px 0;
        }
        a {
          text-decoration: none;
          color: black;
        }
        .info{
            display: inline-block;
            margin: 10px 20px;
            font-size: 18px;
        }
        .display-5{
            font-size: 20pt;
        }
        .jumbotron{
            text-align: center;
        }
        .jumbotron{
            background-color: #ebebeb;
            padding-top: 60px;
            padding-bottom: 60px;
        }
        .work{
          background-color: ${colors[data.favcolor].work};
          padding-top: 80px;
          padding-bottom:115px;
          text-align: center;
        } 
        .infocard{
          height: 100px;
          width: 360px;
          text-align: center;
          margin-bottom:20px;
          padding-top:30px;
          display: inline-block;
          background-color: white;
          border: 1px solid #888;
        }     
        .gitSect{
          width:780px;
          margin:0 auto;
        }   
      </style>
    
    </head>
         
    <body>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <div><img src="${data.profilePic}" class="" alt="profile photo"></div>
        <h1 class="display-4">Hi! My name is ${data.name}</h1>
        <h2 class="">${data.bio}</h2>
        <p class="lead">${data.company}</p>
        <ul>
          <li class="info">          
            <a href="url"><img src="./images/map.png"> ${data.location}</a></li>
          <li class="info">            
            <a href="${data.html_url}"><img src="./images/github.png">Github</a></li>
          <li class="info">       
            <a href="${data.blog}">Blog</a><img src="./images/blog.png">  </li>
        </ul>
      </div>
    </div>

  <div class="work">
    <div class="gitSect">
      <div class="infocard">
          <h2><b>Public Repositories</b></h2>
          <p>${data.repos}</p>
      </div>
      <div class="infocard">
          <h2><b>Followers</b></h2>
          <p>${data.followers}</p>
      </div>
      <div class="infocard">
          <h2><b>Following</b></h2>
          <p>${data.following}</p>
      </div>
      <div class="infocard">
          <h2><b>Github Stars</b></h2>
          <p>${data.star}</p>
      </div>
    </div>
  </div>
</body>
</html>`

}

module.exports = generateHTML





