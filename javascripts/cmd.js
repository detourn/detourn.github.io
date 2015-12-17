jQuery(function($, undefined) {
		
	    $('#cmd').terminal({
			g: function() {
				this.echo('\b\t\t\t\t\t\t\t\t\t\t\t\t[[ ]]\t -\t\tthis city is a coded spine\t\t\b')
			 },
        
        m: function() {
         function load_home(){
document.getElementById("content").innerHTML='<object type="text/html" data="termlib/tests/test1.txt" ></object>';
}
			 },
		
		
			git: function() {
				window.open('https://github.com/unilogue','_blank');
			},
		
		    '?': function() {
            this.echo('COMMANDS: [m]ap\t\t[d]erive\t[g]lossary\r\n\t\t  [?] help\t [c]lose\t [git]hub');
		    },
        c: function() {
            close();
		    },
        
		    
		    terminal_color: function(a) {
				if (a == 'normal') {
		          $('body').css("background-color", '#000');
		        } else {
		          $('body').css("background-color", a);
		        }
		    },
	    }, {
	        greetings: 'COMMANDS: [m]ap\t\t[d]erive\t[g]lossary\r\n\t\t  [?] help\t [c]lose\t [git]hub',
	        name: 'unilogue',
	        prompt: '> '
		});
	});
