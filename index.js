const content = document.getElementById('myVideo');
const arrSrc = ["about:blank",
"k67GBsH6KHMt0sBlZam" , 'k4vik4QaAhibmHBlZio' , 'k38EjQ3yvi40m6BlZim' , 'k2nISFY0nl4OY6BlZik','kZyrYnOwlYFoiNBlZig',
'k6SMmcKlfLs5H6BlZii','k1zMQmiZCHqCMBBlZEi','k7q3j3t4Vvbs0WBlZEg','ko9txT3mPXqW44BlZEa','k5roxIbt2Tn5YRBlZEc',
'k5jZQHHPOavmazBn4yG','kFznqQYbMplvFYBn4yy','kUkWgOFiaBqrm6Bn4tq','k5QsQYegtqJmBtBn4yC','k5B21GO2rEIMyGBn4yA',
'k43avMNSRrAf7RBn4ys','k1psNf0L5VCUjSBn4yw','k5x7TlqgPAft7OBn4yu','k7JRMfE37Zw6HQBn4yq','k70FbxeovO1XJUBn4yE','1003029247','1003032131'];

function handleContent(thisId){
    if(thisId===0){
        content.src = arrSrc[0];
    }
    else if(thisId>20){
        content.src = `https://player.vimeo.com/video/${arrSrc[thisId]}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`;
    }else{
        content.src = `https://www.dailymotion.com/embed/video/${arrSrc[thisId]}?autoplay=1`;
    }
}
var liS = document.querySelectorAll("li");
        liS.forEach((element,idx)=>{
            element.addEventListener('click',function(e){
                e.preventDefault();
                handleContent(idx+1);
            })
        })
