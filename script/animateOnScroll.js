

function inView() {

  let animation_elements = document.getElementsByClassName('animation-element');

  let window_height = window.height;

  let window_top_pos = window.scrollTop;

  let window_bottom_pos = (window_top_pos + window_height);

  forEach(animation_elements, function(){

    let element = this.getElementsByClassName('animation-element');

    let element_height = element.offset.top;

    let element_top_pos = element.outerHeight;

    let element_bottom_pos = (element_top_pos + element_height);

    if ((element_bottom_pos >= window_top_pos) && (element_top_pos <= window_bottom_pos)) {

      element.fadeIn(getElementsByClassName('animation-element'));

    }

    else {

      element.fadeOut(getElementsByClassName('animation-element'));

    }
  });
}
