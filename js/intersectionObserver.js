const la_casa_de_la_arrachera = document.querySelector('#la-casa-de-la-arrachera');
const tacos = document.querySelector('#tacos');
const variedad = document.querySelector('#variedad');
const ambiente_familiar = document.querySelector('#ambiente-familiar');
const bebidas_y_licores = document.querySelector('#bebidas-y-licores');
const pide_a_domicilio = document.querySelector('#pide-a-domicilio');
const facebook = document.querySelector('#facebook');
const ubicacion = document.querySelector('#ubicacion');


animarSección(la_casa_de_la_arrachera);
animarSección(tacos);
animarSección(variedad);
animarSección(ambiente_familiar);
animarSección(bebidas_y_licores);
animarSección(pide_a_domicilio);
animarSección(facebook);
animarSección(ubicacion);

function animarSección(seccionAAnimar){
    const options={
        threshold:0.40
    }
    const miObserver = new IntersectionObserver(funcionCallBack, options);
    function funcionCallBack(objeto) {
        if(objeto[0].isIntersecting){
            gsap.fromTo(seccionAAnimar, {x:-100, opacity:0}, {x:0,opacity:1,duration: 1});
        } else {
            gsap.fromTo(seccionAAnimar, {x:0, opacity:1}, {x:-100,opacity:0,duration: 1});
        }
        
    }
    miObserver.observe(seccionAAnimar);
}