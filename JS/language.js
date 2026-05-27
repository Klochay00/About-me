
function setLang(lang){
  document.querySelectorAll('[data-en]').forEach(el=>{
    const text = el.getAttribute(`data-${lang}`);
    if(text){
      el.innerText = text;
    }
  });
}