let http = require("http")

let myNodeWebApp = http.createServer( function(req, res){

    if (req.url == "/")
    {
        res.end(`

            <div class="home" style="text-align: center;font-family: 'Segoe UI'; background-color :#20262E; font-weight: 700;margin-top: 15px; width: 100%; font-size: 3em"> 
            
            <em style="color: lightgrey">Welcome To Our Home Page </em>
            
            <br>
            
            <hr>
            
            <div style="text-align: center; font-weight: 700;margin-top: 15px; font-family: 'Segoe UI';width: 100%; font-size: large; color: lightgrey  "> View our project list  </div>

            </div>
            
            <div class="main" style="display: inline-flex;font-family: 'Segoe UI';text-align: center; width : 100%; background-color: lightgrey">
            
            <section class="left" style=" width: 30%;height:350px;  box-shadow: 0 0 4px #55555555; background-color: #93BFCF"> 
            
            <div style="font-weight: 700; font-size:2em"> 
            <br>  <br> 
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-rocket-takeoff-fill" viewBox="0 0 16 16">
            <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.578 3.578 0 0 0-.108-.563 2.22 2.22 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2.35 2.35 0 0 0-.16-.045 3.797 3.797 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.552 2.552 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526l.24-2.408Zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361.599.599.437 1.732-.36 2.531Z"/>
             <path d="M5.205 10.787a7.632 7.632 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925Z"/>
            </svg>
            
            <br>  <br> 
            
            Technology   
            <br> <br>
            </div>
            
            
            </section>
            
             <section class="right" style=" width: 70%;height:350px; box-shadow: 0 0 4px #55555555; background-color: #BDCDD6"> 
             <div style="font-weight: 700; font-size:2em"> 
            <br>  <br> 
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-briefcase-fill" viewBox="0 0 16 16">
            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
             <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
            </svg>
            <br>  <br> 
             
             Business Management  
             <br> <br> 
             </div>
            </section>
            
            </div>
            
            <div class="main-second" style="display: inline-flex;text-align: center;font-family: 'Segoe UI'; width : 100%; background-color: lightgrey">
            
            <section class="card" style=" width: 25%;height:450px; box-shadow: 0 0 4px #55555555; background-color: #ECF9FF"> 
             <div style="font-weight: 700; font-size:2em; padding: 10px"> 
            <br>  <br> 
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-universal-access" viewBox="0 0 16 16">
            <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6 5.5l-4.535-.442A.531.531 0 0 1 1.531 4H14.47a.531.531 0 0 1 .066 1.058L10 5.5V9l.452 6.42a.535.535 0 0 1-1.053.174L8.243 9.97c-.064-.252-.422-.252-.486 0l-1.156 5.624a.535.535 0 0 1-1.053-.174L6 9V5.5Z"/>
            </svg>
            
            <br>  <br> 
            
            Human Resource Management  
            
            <br><br>
            </div>
            </section>
            
             <section class="card" style=" width: 25% ;height:450px; box-shadow: 0 0 4px #55555555; background-color: #FFFBEB"> 
             <div style="font-weight: 700; font-size:2em; padding: 10px"> 
            <br>  <br> 
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/>
            </svg>
            <br>  <br> 
             Educational Management 
             <br><br>
              </div>
            </section>
            
            <section class="card" style=" width: 25%;height:450px; box-shadow: 0 0 4px #55555555; background-color: #FFE7CC"> 
             <div style="font-weight: 700; font-size:2em;padding: 10px "> 
            <br>  <br> 
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-pc-display" viewBox="0 0 16 16">
            <path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V1Zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5ZM1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2H1.5Z"/>
            </svg>
            <br>  <br> 
            
            Human capital Development  
            <br><br>
            </div>
            </section>
            
             <section class="card" style=" width: 25%;height:450px; box-shadow: 0 0 4px #55555555; background-color: #EEE9DA"> 
             <div style="font-weight: 700; font-size:2em;padding: 10px "> 
            <br>  <br> 
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
            </svg>
            <br>  <br> 
            Sales & Marketing 
            <br><br>
            </div>
            </section>
            
             
            </div>
            <div class="footer" style="text-align: center;height: 25px; background-color :#20262E;color: white; font-family: 'Segoe UI'; width: 100%;">©2021 Ajao.H All rights reserved
            </div>
            
        `)
    }
       else if ( req.url == "/about"){
        res.end(

            `<div class="about" style="text-align: center;font-family: 'Segoe UI'; background-color :#20262E; font-weight: 700;margin-top: 15px; width: 100%; font-size: 3em"> 
            
            <em style="color: lightgrey">About</em><br> 
            
             <div class="main" style="display: inline-flex;font-family: 'Segoe UI';text-align: center; width : 100%; background-color: lightgrey">
            
            <section class="left" style=" width: 30%;height:350px;  box-shadow: 0 0 4px #55555555; background-color: #93BFCF"> 
            
            <div style="font-weight: 200;font-size:medium"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="215" height="215" fill="currentColor" class="bi bi-file-person-fill" viewBox="0 0 16 16">
            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z"/>
            </svg>  
            </div>
         
            <div class="developer " style=" padding: 2px ; margin: 2px;border-left-style:solid;border-left-color:crimson;  
             border-radius: 5px; color: #20262E   " >Ajao Hazzan 
            </div>
            </section>
            
             <section class="right" style=" width: 70%;height:350px;text-align: left; box-shadow: 0 0 4px #55555555; background-color: #BDCDD6"> 
             <div style="font-weight: 180; font-size:0.7em; padding: 5px"> 
             
             <div class="project">
            Project Description : This project was developed with node.js. However, the best option would be to use express framework,
            and to develop the models and controllers. But, my ideal was to explore this technology, to have good  understand how things work in here.
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#400E32" class="bi bi-emoji-wink-fill" viewBox="0 0 16 16">
             <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM7 6.5C7 5.672 6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8s1-.672 1-1.5zM4.285 9.567a.5.5 0 0 0-.183.683A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75.5.5 0 0 0-.683-.183zm5.152-3.31a.5.5 0 0 0-.874.486c.33.595.958 1.007 1.687 1.007.73 0 1.356-.412 1.687-1.007a.5.5 0 0 0-.874-.486.934.934 0 0 1-.813.493.934.934 0 0 1-.813-.493z"/>
            </svg><strong> Happy Coding ! </strong>
            </div>
            <br> 
             </div>
            </section>
            
            </div>
            
            
            </div>
        `)
      }

      else

        res.end(`<div class="page404" style="text-align: center; font-weight: 700"> Sorry ! The page is not available </div>`)

    })
   myNodeWebApp.listen(3000)
