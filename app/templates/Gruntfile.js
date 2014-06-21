module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    "download-atom-shell": {
      version: "0.12.7",
      outputDir: "dist",
      rebuild: true
    }
  });

  grunt.registerTask('build', ['download-atom-shell']);
  grunt.registerTask('default', 'build');

  grunt.loadNpmTasks('grunt-download-atom-shell');
};
