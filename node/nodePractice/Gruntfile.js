module.exports = function (grunt) {
    grunt.initConfig({
        log: {
            foo: [1, 2, 3],
            bar: "hello-world",
            baz: false
        },

        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'css/main.css': 'style.scss'
                }
            }
        },
        watch: {
            css: {
                files: '*.scss',
                tasks: ['sass']
            },
        }
    });

    grunt.registerTask("timeStamp", function (n) {
        setInterval(function () {
            console.log(Date.now());
        }, n);
    })

    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask("exit", function () {
        console.log(new Date());
    })
    grunt.registerTask("welcome", function (name) {
        console.log("Welcome", name);
    });
    grunt.registerTask('default', ["welcome:Diwakar", "exit"]);
    grunt.registerMultiTask("log", function () {
        console.log("Config", this.name, "Params:", this.data);
    })
}