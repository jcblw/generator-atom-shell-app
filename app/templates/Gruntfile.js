module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    dest: (process.platform == 'darwin') ? 'Atom.app/Contents/Resources/' : 'resources/',

    "download-atom-shell": {
      version: "0.12.7",
      outputDir: "bin",
      rebuild: true
    },

    "copy": {
        app: {
            expand: true,
            src: ['app/**'],
            dest: "bin/<%%= dest %>"
        }
    }
  });

  grunt.registerTask('package', ['build', 'copy']);
  grunt.registerTask('build', ['download-atom-shell']);
  grunt.registerTask('default', 'build');

  grunt.loadNpmTasks('grunt-download-atom-shell');
  grunt.loadNpmTasks('grunt-contrib-copy');
};
