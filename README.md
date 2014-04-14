trademark-search
================

This is an example application for the trademark datasource. It allows to search for trademarks using
different criteria. For each trademark a detail view with all the trademark details is offered.

Development Setup
-----------------

- install nodejs : http://nodejs.org/download/
- install git: http://git-scm.com/downloads/
- If you are using Windows, add the path to the git.exe (C:\Program Files (x86)\Git\bin) to the PATH system variable
- install yeoman: https://github.com/yeoman/yeoman/wiki/Getting-Started

```
npm install -g yo
npm install -g grunt grunt-cli bower
```

- clone this repository

Backend
-------

Create an account and a project on http://28.io. Configure the trademark datasource to the project. Install the 28.io command line tool as follows:

```
$ npm install 28 -g
```

Inside the /queries directory you can then use the CLI to deploy this project:

```
$ 28 login <your email>
```

```
$ 28 upload <projectname>
```

On the 28.io plattform perform these steps:

Add the trademark datasource to the project.


Frontend Installation
---------------------

- in the repository directory, execute the install commands for serverside components (npm) and clientside components (bower)

```
npm install
bower install
```

- In app/scripts/app.js, line 9 adjust the API_URL to your needs.

```
.constant('API_URL', 'http://yourprojectname.28.io/v1')  
```

- start the development server

```
grunt server
```

This should open a new browser on localhost:9000.
The port can be customized in Gruntfile.js, if that port is not available.
