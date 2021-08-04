$(document).ready(() => {

    getMovies();
    getSeries() ;
});

function getMovies() {
    axios.get('http://demo.tech2edge.co/samples/data-sg').
        then((response) => {
            console.log(response);
            let movies = response.data.characters;
            let output = `<div class="heading">
                            <h1>Characters</h1>
                        </div>`;
            let i = 0;
            let j = 0;
            let k = 0 ;
            let imgs = ['images/sartajsingh.jpg',"images/ganeshgaitonde.jpg","images/anjalimathur.jpg","images/khannaguruji.jpg","images/dilipparulkar.jpg"] ;
            let nos = ['one', 'two', 'three', 'four', 'five'] ;
            $.each(movies, (index, movie) => {
                output += `<div class="grid-container">
                <a href="" data-toggle="modal" data-target="#myModal">
                <img src=${imgs[i++]} class= "img-responsive img-rounded" width="100%">
                </a>
                
                <!-- Modal -->
                <div id="myModal" class="modal fade" role="dialog">
                <div class="modal-dialog" >

                    <!-- Modal content-->
                    <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Series character</h4>
                    </div>
                
                    <div class="modal-body" >
                     
                    <div id="myCarousel" class="carousel slide" data-ride="carousel" align="center" >
                    <!-- Indicators -->
                    <ol class="carousel-indicators">
                      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                      <li data-target="#myCarousel" data-slide-to="1"></li>
                      <li data-target="#myCarousel" data-slide-to="2"></li>
                      <li data-target="#myCarousel" data-slide-to="3"></li>
                      <li data-target="#myCarousel" data-slide-to="4"></li>
                    </ol>
                  
                    <!-- Wrapper for slides -->
                    <div class="carousel-inner">
                      <div class="item active">
                        <img src=${imgs[j++]} ">
                      </div>
                  
                      <div class="item">
                        <img src=${imgs[j++]}>
                      </div>
                  
                      <div class="item">
                        <img src=${imgs[j++]} >
                      </div>

                      <div class="item">
                      <img src=${imgs[j++]} >
                    </div>

                    <div class="item">
                    <img src=${imgs[j++]} >
                  </div>
                    </div>
                  
                    <!-- Left and right controls -->
                    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                      <span class="glyphicon glyphicon-chevron-left"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#myCarousel" data-slide="next">
                      <span class="glyphicon glyphicon-chevron-right"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                    </div>

                </div>
                </div>
                
         
            
                <h3>
                    ${movie.name}
                </h3>
                <p>${movie.profession} ${movie.age}</p>
             
                
                
                </div>
                `

            })
            $('#movies').html(output);
        })
        .catch((err) => {
            console.log(err);
        });
}

function getSeries() {
    axios.get('http://demo.tech2edge.co/samples/data-sg').
        then((response) => {
            let series = response.data.series;
            let output = '';
            let i = 0;
            output += `<div class="container">
            <h2>${series.title}</h2>
            <h4>${series.ott}</h4>
            <p> ${series.desc}</p>
            </div>`
            $('#series').html(output);
        })
        .catch((err) => {
            console.log(err);
        });
}
