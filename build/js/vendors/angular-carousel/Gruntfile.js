"use strict";var path=require("path");module.exports=function(s){require("load-grunt-tasks")(s),s.initConfig({pkg:s.file.readJSON("package.json"),meta:{banner:'/**\n * <%= pkg.description %>\n * @version v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n * @link <%= pkg.homepage %>\n * @author <%= pkg.author %>\n * @license MIT License, http://www.opensource.org/licenses/MIT\n */\n'},connect:{devserver:{options:{port:9999,hostname:"0.0.0.0",base:"."}}},dirs:{src:"src",dest:"dist"},copy:{},autoprefixer:{source:{src:"<%= dirs.dest %>/<%= pkg.name %>.css",dest:"<%= dirs.dest %>/<%= pkg.name %>.css"}},concat:{options:{banner:"<%= meta.banner %>"},dist:{src:["<%= dirs.src %>/*.js","<%= dirs.src %>/**/*.js"],dest:"<%= dirs.dest %>/<%= pkg.name %>.js"}},sass:{dist:{files:[{expand:!0,cwd:"./src/css",src:["*.scss"],dest:"./dist",ext:".css"}]}},cssmin:{combine:{files:{"<%= dirs.dest %>/<%= pkg.name %>.min.css":["<%= dirs.dest %>/<%= pkg.name %>.css"]}}},uglify:{options:{banner:"<%= meta.banner %>"},dist:{src:["<%= concat.dist.dest %>"],dest:"<%= dirs.dest %>/<%= pkg.name %>.min.js"}},jshint:{files:["Gruntfile.js","<%= dirs.src %>/*.js","test/unit/*.js"],options:{curly:!1,browser:!0,eqeqeq:!0,immed:!0,latedef:!0,newcap:!0,noarg:!0,sub:!0,undef:!0,boss:!0,eqnull:!0,expr:!0,node:!0,globals:{exports:!0,angular:!1,$:!1}}},karma:{options:{configFile:path.join(__dirname,"test","karma.conf.js")},unit:{port:7101,singleRun:!1,background:!0},continuous:{singleRun:!0}},changelog:{options:{dest:"CHANGELOG.md"}},watch:{dev:{files:["<%= dirs.src %>/**"],tasks:["build","karma:unit:run"]},test:{files:["test/unit/**"],tasks:["karma:unit:run"]}}}),s.registerTask("build",["jshint","concat","uglify","sass","autoprefixer","cssmin"]),s.registerTask("default",["build","connect","karma:unit","watch"])};