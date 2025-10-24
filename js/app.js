// let a = 0;
// let b = 999;
// let d =Number( document.getElementsByTagName("input")[0]);

// d.value .addEventListener("blur" , (e)=>{
// if(d.value === 0)
//     {

//     alert(", خوژتیپ , خوژتیپ , خوژتیپ , خوژتیپ , خوژتیپ , خوژتیپ , خوژتیپ , خوژتیپ , خوژتیپ , خوژتیپ , خوژتیپ , خوژتیپ , خوژتیپ , خوژتیپ , خوژتیپ")
// }


// else if(d < 10){
//     alert("افرین داری نزدیک میشی")
// }

// })


let a = 666;
let b = document.getElementsByTagName("input")[0];


b.addEventListener("blur" , (e)=>{

    let c = Number(b.value);

    if (c === a){
        alert("🎉🎉🎉🎉🎉🎉🎉خوژتیپ،خوژتیپ،خوژتیپ،خوژتیپ,خوژتیپ,خوژتیپ,خوژتیپ,خوژتیپ,خوژتیپ,خوژتیپ,خوژتیپ")
    }
    else if (c < a){
        alert("برو بالا")
    }
     else if (c > a){
        alert("بیا پایین ")
    }
    else if (c > 999){
        alert("😒😒😒من گفتم بین 0 تا 999")
    }
    else {
        alert("برو پایین‌تر")
    }

});