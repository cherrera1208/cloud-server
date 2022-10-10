# cloud-server

using AWS to deploy a cloud server

## deployed servers

* [GUI](https://us-west-2.console.aws.amazon.com/elasticbeanstalk/home?region=us-west-2#/environment/dashboard?applicationName=cloud-server&environmentId=e-mhj9urwu2b)

* [CLI](https://us-west-2.console.aws.amazon.com/elasticbeanstalk/home?region=us-west-2#/environment/dashboard?applicationName=cloud-server-cli&environmentId=e-9cce22j5vq)

## Process

The process for deploying from the GUI is pretty straight forward if following the prompts. I made the mistake of zipping the entire "cloud-server" repo when I only needed to zip the JS code and the package.json, so I had to start over. But other than that hiccup, no problems.

The CLI took some more documentation, but it wasn't too bad either. The docs I used will be linked below in _Resources_, but in short, the process required me to make a new admin user, attach the user to an admin group, then follow the directions provided. **IMPORTANT** the admin and secret keys are only shown once, so I saved them somewhere secure on my PC.

## Resources

* [User Creation for CLI](https://aws.amazon.com/getting-started/hands-on/set-up-command-line-elastic-beanstalk/)

* [Deploy and Monitor from CLI](https://aws.amazon.com/getting-started/hands-on/deploy-app-command-line-elastic-beanstalk/)

* [Elastic Beanstalk GUI](https://us-west-2.console.aws.amazon.com/elasticbeanstalk/home?region=us-west-2#/welcome)
