
    $(document).ready(function(){
        
        let comphany = document.querySelector('#comphany');
        let jsNav= document.querySelector ('.jsNav');
        let exid = document.querySelector('#exid');
    
        comphany.addEventListener('mouseover' , function(){
            jsNav.style.display = 'block';
        });
        
        exid.addEventListener('click' , function(){
            jsNav.style.display = 'none';
        });     


        $('#link-1').mouseenter(function(){
           $('#purple-1').css('display' , 'block')
        });
        $('#link-1').mouseleave(function(){
            $('#purple-1').css('display' , 'none')
        })

        $('#link-2').mouseenter(function(){
            $('#purple-2').css('display' , 'block')
         });
         $('#link-2').mouseleave(function(){
             $('#purple-2').css('display' , 'none')
         })

         
         $('#link-3').mouseenter(function(){
            $('#purple-3').css('display' , 'block')
         });
         $('#link-3').mouseleave(function(){
             $('#purple-3').css('display' , 'none')
         })

         

         $('#link-4').mouseenter(function(){
            $('#purple-4').css('display' , 'block')
         });
         $('#link-4').mouseleave(function(){
             $('#purple-4').css('display' , 'none')
         })

         

         $('#link-5').mouseenter(function(){
            $('#purple-5').css('display' , 'block')
         });
         $('#link-5').mouseleave(function(){
             $('#purple-5').css('display' , 'none')
         })
 


         $('#link-6').mouseenter(function(){
            $('#purple-6').css('display' , 'block')
         });
         $('#link-6').mouseleave(function(){
             $('#purple-6').css('display' , 'none')
         })
 

    })
    
   