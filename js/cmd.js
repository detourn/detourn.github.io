$('#cmd').terminal(function(command, term) {
  if (command == 'm') {
    $('#command').load("https://unilogue.github.io/commands #div1");
  } else if (command == 'd') {
    $('#command').load("https://unilogue.github.io/commands #div2");
  } else if (command == 'g') {
    $('#command').load("https://unilogue.github.io/commands #div3");
  } else if (command == 'git') {
    window.open('https://github.com/unilogue', '_blank');
  } else if (command == '?') {
    term.echo('COMMANDS: [m]ap\t\t[d]erive\t[g]lossary\r\n\t\t  [?] help\t [clear]\t [git]hub');
  } else if (command !='') {
    term.echo('Command not found!');
  }
}, {
  greetings: 'COMMANDS: [m]ap\t\t[d]erive\t[g]lossary\r\n\t\t  [?] help\t [clear]\t [git]hub',
  name: 'unilogue',
  prompt: '> '
});
(function() {
    var pre = document.getElementsByTagName('pre'),
        pl = pre.length;
    for (var i = 0; i < pl; i++) {
        pre[i].innerHTML = '<span class="line-number"></span>' + pre[i].innerHTML + '<span class="cl"></span>';
        var num = pre[i].innerHTML.split(/\n/).length;
        for (var j = 0; j < num; j++) {
            var line_num = pre[i].getElementsByTagName('span')[0];
            line_num.innerHTML += '<span>' + (j + 1) + '</span>';
        }
    }
})();
