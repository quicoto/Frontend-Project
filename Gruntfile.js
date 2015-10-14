module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			html: {
				files: ['html-source/*.html', 'html-source/includes/*.html'],
				tasks: ['clean:html', 'compile_html']
			},
			css: {
				files: ['source/sass/**/*.{scss,sass}', 'source/img/sprite/*', ],
				tasks: 'css_compile'
			},
			js: {
				files: 'source/js/**/*.js',
				tasks: ['js_compile']
			},
			grunt_conf: {
				files: 'Gruntfile.js',
				tasks: 'default'
			}
		},

		concat: {
			css_main: {
				src: ['source/css/main.css'],
				dest: 'dist/css/XXX-main.css'
			},

			css_bootstrap: {
				src: [
					'source/css/vendor/font-awesome.css',
					'source/css/vendor/bootstrap*/*.css'
				],
				dest: 'dist/css/XXX-vendor.css'
			},

			css_ie8: {
				src: [
					'source/css/ie8.css'
				],
				dest: 'dist/css/XXX-ie8.css'
			},

			css_pack: {
			    src: [
			        'dist/css/XXX-vendor.css',
					'dist/css/XXX-main.css',
			    ],
			    dest: 'dist/css/XXX-pack.css'
			},

			js_main: {
				src : ['source/js/components/*.js', 'source/js/common.js'],
				dest : 'dist/js/XXX-app.js'
			},

			js_vendor: {
				src : [
					'source/js/vendor/jquery-1*min.js',
					'source/js/vendor/bootstrap*/*.js',
					'source/js/vendor/other*/*.js'
				],
				dest : 'dist/js/XXX-vendor.js',
				separator: ';'
			},

			js_pack: {
				src : ['dist/js/XXX-vendor.js', 'dist/js/XXX-app.js'],
				dest : 'dist/js/XXX-pack.js'
			},

			js_debug_true: {
				src : ['source/js/__debug_true.js', 'dist/js/XXX-pack.js'],
				dest : 'dist/js/XXX-pack-debug.js'
			},

			js_debug_false: {
				src : ['source/js/__debug_false.js', 'dist/js/XXX-pack.js'],
				dest : 'dist/js/XXX-pack.js'
			},

			js_ie8: {
				src : [
					'source/js/ie89.js'
					],
				dest : 'dist/js/XXX-ie89.js'
			},
		},

		stripmq: {
			options: {
				width: 1025
			},

			ie8: {
				files: {
					'dist/css/XXX-ie8.css': ['dist/css/XXX-ie8.css'],
				}
			}
		},

		cmq: {
			all: {
				files: {
					'dist/css': 'dist/css/*.css'
				}
			}
		},

		cssmin: {
			vendor: {
				src: 'dist/css/XXX-vendor.css',
				dest: 'dist/css/XXX-vendor.min.css'
			},

			main: {
				src: 'dist/css/XXX-main.css',
				dest: 'dist/css/XXX-main.min.css'
			},

			ie8: {
				src: 'dist/css/XXX-ie8.css',
				dest: 'dist/css/XXX-ie8.min.css'
			},

			pack: {
				src: 'dist/css/XXX-pack.css',
				dest: 'dist/css/XXX-pack.min.css'
			}
		},

		uglify: {
			options: {
				compress: {
					global_defs: {
						DEBUG: true
					},
					dead_code: true,
					hoist_vars: true
				}
			},

			js: {
				files: {
					'dist/js/XXX-app.min.js': ['dist/js/XXX-app.js'],
					'dist/js/XXX-vendor.min.js': ['dist/js/XXX-vendor.js'],
					'dist/js/XXX-pack.min.js': ['dist/js/XXX-pack.js']
				}
			}
		},

		compass: {
			dev: {
				options: {
					config: 'configs/config.rb'
				}
			}
		},

		jshint: {
			options: {
				jshintrc: 'configs/.jshintrc',
			},

			target: {
				src: "source/js/*.js"
			}
		},

		clean: {
			all: {
				src: ['html/*', 'dist/**', 'source/css/**']
			},

			html: {
				src: ['html/*']
			}
		},

		copy: {
			img: {
				expand: true,
				cwd: 'source/img',
				src: ['**'],
				dest: 'dist/img'
			},

			fonts: {
				expand: true,
				cwd: 'source/fonts',
				src: '**',
				dest: 'dist/fonts'
			},

			other: {
				expand: true,
				cwd: 'source/other',
				src: '*',
				dest: 'dist/other'
			}
		},

		jinja: {
			dist: {
				options: {
					templateDirs: ['html-source']
				},
				files: [{
				expand: true,
					dest: 'html/',
					cwd: 'html-source/',
					src: ['**/!(_)*.html']
				}]
			}
		},

		imagemin: {
			dynamic: {
				options: {
					optimizationLevel: 4
				},
				files: [{
				expand: true,                  // Enable dynamic expansion
				cwd: 'dist/',          // Src matches are relative to this path
				src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
				dest: 'dist/'                  // Destination path prefix
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-combine-media-queries');
	grunt.loadNpmTasks('grunt-stripmq');
	grunt.loadNpmTasks('grunt-jinja');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.registerTask('cssmin_regular', ['cssmin:main', 'cssmin:vendor', 'cssmin:ie8', 'cssmin:pack']);

	grunt.registerTask('css_compile', ['compass:dev', 'concat:css_bootstrap', 'concat:css_main', 'cmq', 'concat:css_ie8','concat:css_pack', 'stripmq:ie8', 'cssmin_regular', 'copy:img', 'copy:fonts']);

	grunt.registerTask('js_compile', ['jshint', 'concat:js_main', 'concat:js_vendor', 'concat:js_pack', 'concat:js_debug_true', 'concat:js_debug_false', 'concat:js_ie8', 'uglify:js', 'copy:other']);

	grunt.registerTask('compile_html', ['jinja']);

	// Different Tasks that can be run
	// grunt
	grunt.registerTask('default', ['clean:all', 'css_compile', 'js_compile', 'copy', 'compile_html', 'imagemin']);
	// grunt dev
	grunt.registerTask('dev', ['default', 'watch']);
};
