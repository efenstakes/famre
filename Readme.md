# Famre 
( *fostering and connecting families* )

## Table of Contents

- [Install](#install)
- [Introduction](#introduction)
- [API](#api)
- [Contributing](#contributing)
- [SecurityVulnerabilities](#security-vulnerabilities)
- [Licence](#licence)



## Install
Famre is a foster care adoption system. It helps governments and officials who run the foster
care system or any foster facilities manage child adoption.  

Before downloading and running this server, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 8.* or higher is required as well as [mongo](https://mongo.com/downloads/).

Installation is done by first using the `npm clone` command to get the repo then copying the contents of db.sql and creating the database 

```sh
$ git clone https://github.com/efenstakes/Famre
$ cd Famre/server
$ npm install
$ npm start
```


## Introduction 
Famre is a foster care adoption system. It helps governments and officials who run the foster
care system or any foster facilities manage child adoption. It also helps move
the old existing systems which are mostly paper-based to a digital system which is easier to manage.

System entities 
1. Government Staff
2. Foster kids
3. Children's home facilities


It's aimed at solving these problems:
* Scattered storage systems which are mostly based on old paper systems
* Transparency issues in foster facilities
* Poor auditing of operations in the system 
* Long duration taken for availing, compiling or creating reports 


It helps with these tasks:
1. Store system entities like Government Staff, Facilities, Facility Supervisors
2. Keep reports
3. Keep history of facility progress 
4. Authenticate system operations
5. Assure donors and sponsors that they are contributing to verified facilities 
7. Facilitate foster kid adoption by willing families


## API
The server runs on port 9000 and follows REST API best practices. 

The *docs* folder contains the server documentation files. *docs/apidoc* is the folder with API documentation for developers.
 

## Contributing
Contributions to the Famre server are welcome. Contributions are accepted using GitHub pull requests. If you're not familiar with making GitHub pull requests, please refer to the GitHub documentation "Creating a pull request".

For a good pull request, we ask you provide the following:

* Try to include a clear description of your pull request in the description. It should include the basic "what" and "why"s for the request.  

* Follow the same code formatting model used in the existing code base

Finally when new code is added, run below command to generate new api documentation in docs/apidoc folder. 

```sh

 $ gulp apidoc

```

# Security Vulnerabilities
If you discover a security vulnerability within Laravel, please send an e-mail to Efen via famre.devs@gmail.com. All security vulnerabilities will be promptly addressed.


# Licence
The Famre system is open-source software licensed under the [ISC Licence](https://www.isc.org/downloads/software-support-policy/isc-license/).
A copy of the licence can be found above.