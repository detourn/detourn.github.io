jQuery(function($, undefined) {
		
	    $('body').terminal({
			glossary: function() {
							window.open('http://viperslang.tumblr.com/post/6345414616','_blank');
			 },
        
        map: function() {
         
    
        this.echo('<input type="text" name="value" value="go" />');
        },
		
		
			github: function() {
				window.open('https://github.com/unilogue','_blank');
			},
		
		    help: function() {
		        this.echo('<br>' 'commands:');
		        this.echo('\tmap...................................research paper');
		        this.echo('\tderive................................digital personae');
		        this.echo('\tglossary..............................a cyber love poem');
			this.echo('\tclear.................................clears the screen');
			this.echo('\tgithub................................my github profile');
		        this.echo('\thelp..................................this help screen' '<br>');
		    },
		    
		    terminal_color: function(a) {
				if (a == 'normal') {
		          $('body').css("background-color", '#0d0d0d');
		        } else {
		          $('body').css("background-color", a);
		        }
		    },
	    }, {
	        greetings: 'type `help` for a list of commands.\r\n',
	        name: 'unilogue',
	        height: window.innerHeight - 36,
	        prompt: '> '
		});
	});
