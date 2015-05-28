module.exports = function(grunt){

	//Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			main: {
				files: [
					{
						expand: true, 
						cwd: 'public/dev-javascripts/',
						src: '**', 
						dest: 'public/javascripts'
					}
				]
			}
		}
	});

	//Load uglify plugin
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	//Load watch plugin
	grunt.loadNpmTasks('grunt-contrib-watch');

	//Load concat plugin
	grunt.loadNpmTasks('grunt-contrib-concat');

	//Load copy plugin
	grunt.loadNpmTasks('grunt-contrib-copy');

	//Load default task
	grunt.registerTask('default', ['copy']);
};