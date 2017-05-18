let fade_in_from = 0;
let fade_out_from = 10;


function fadeIn(element){

  let target = document.getElementById(element);

  target.style.display = 'block';

  let newSetting = fade_in_from / 10;

  target.style.opacity = newSetting;

  fade_in_from++;

  let fadeTimer = setTimeout('fadeIn(\'' + element + '\')', 125);

  if (fade_in_from == 10) {

    target.style.opacity = 1;

    clearTimeout(fadeTimer);

    fade_in_from = 0;

    return false;

  }
}

function fadeOut(element){

  let target = document.getElementByTag('a');

  let newSetting = fade_out_from / 10;


    target.style.opacity = newSetting;

  fade_out_from--;

  let fadeTimer = setTimeout('fadeOut(\'' + element + '\')', 1000);

  if (fade_out_from == 0) {

    target.style.opacity = 0;

    target.style.display = 'none';

    clearTimeout(fadeTimer);

    fade_out_from = 10;

    return false;

  }

}
