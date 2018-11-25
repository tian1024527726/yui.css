function setupScrollAffixs() {
  var scrollPos = [];
  var activePos = [];
  var affixSpans = $('#demo-affix');

  $('.demo-section').each(function(idx, el) {
    var elTop = el.offsetTop;
    scrollPos.push(elTop - 15);
    activePos.push(elTop - 30);
    affixSpans.append('<span title="' + $(el).find('h2.title').text() + '" />');
  });

  $('.demo-affix span').click(function() {
    return $('html,body').animate({
      scrollTop: scrollPos[$(this).index()]
    }, 800);
  });

  $(window).scroll(function() {
    var sclTop = $(this).scrollTop();
    if (sclTop < 100) {
      $('.demo-affix').hide('slow');
    } else {
      $('.demo-affix').show('slow');
    }

    $.each(activePos, function(idx, pos) {
      if (sclTop >= (pos - 100)) {
        $('.demo-affix span').removeClass('active').eq(idx).addClass('active');
      }
    });
  })
}

(function() {
  $(function() {
    setupScrollAffixs()
  })
}).call(this)