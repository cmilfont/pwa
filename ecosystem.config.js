module.exports = {
 /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
    apps: [
        {
            name: "beerswarm",
            script: "bin/server.js",
            watch: ["bin"],
            ignore_watch: [".git", "node_modules", "isomorphic"],
            exec_interpreter: "babel-node",
            interpreter_args: "--inspect",
            env_development: {
                PORT: 3001
            },
            env_production: {
                PORT: process.env.PORT,
                NODE_ENV: "production"
            }
        }
    ]
}