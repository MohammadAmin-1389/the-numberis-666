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