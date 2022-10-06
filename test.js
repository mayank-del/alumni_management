const bcrypt = require('bcryptjs');
const item = {
    id: 1,
    name: "name",
    username: "text",
    regno: "text1",
    password: bcrypt.hashSync('password'),
    dob: "2018-03-29",
    gender: "male",
    address: "address",
    mobile: 123,
    email: "email",
    passoutYear: 12,
    company: "company",
    qualification: "bed",
    designation: "des",
    updatedAt: new Date(),
    createdAt: new Date(),
}
const p = JSON.stringify(item)
console.log(p)
console.log(JSON.parse(p))

/*
umni_name:string,user_name:string,register_number:string,password:string,dob:string,gender:string,address:string,mobile_number:number,email_address:string,passout_year:number,company_name:string,qualification:string,designation:string

Sequelize CLI [Node: 16.15.0, CLI: 6.5.1, ORM: 6.24.0]

New model was created at D:\Web_Developement_Base\MERN\alumni-api\models\user.js .
New migration was created at D:\Web_Developement_Base\MERN\alumni-api\migrations\20221006063937-create-user.js .

vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api
$ sequelize db:migrate

Sequelize CLI [Node: 16.15.0, CLI: 6.5.1, ORM: 6.24.0]

Loaded configuration file "config\config.json".
Using environment "development".
== 20221006063937-create-user: migrating =======
== 20221006063937-create-user: migrated (0.040s)


vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api
$ npm start

> alumni-api@1.0.0 start
> node server.js

Server running in development mode on port 5000
Executing (default): INSERT INTO `Users` (`id`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?);
Executing (default): INSERT INTO `Users` (`id`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?);
Executing (default): INSERT INTO `Users` (`id`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?);
Executing (default): INSERT INTO `Users` (`id`,`alumni_name`,`user_name`,`register_number`,`password`,`dob`,`gender`,`address`,`mobile_number`,`email_address`,`passout_year`,`company_name`,`qualification`,`designation`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);
Executing (default): INSERT INTO `Users` (`id`,`alumni_name`,`user_name`,`register_number`,`password`,`dob`,`gender`,`address`,`mobile_number`,`email_address`,`passout_year`,`company_name`,`qualification`,`designation`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);
Executing (default): INSERT INTO `Users` (`id`,`alumni_name`,`user_name`,`register_number`,`password`,`dob`,`gender`,`address`,`mobile_number`,`email_address`,`passout_year`,`company_name`,`qualification`,`designation`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);

vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api
$ sequelize model:generate --name User --attributes alumni_name:string,user_name:string,register_number:string,password:string,dob:string,gender:string,address:string,mobile_number:number,email_address:string,passout_year:number,company_name:string,qualification:string,designation:string

Sequelize CLI [Node: 16.15.0, CLI: 6.5.1, ORM: 6.24.0]

New model was created at D:\Web_Developement_Base\MERN\alumni-api\models\user.js .    
New migration was created at D:\Web_Developement_Base\MERN\alumni-api\migrations\20221006064838-create-user.js .

vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api
$ node server.js
Server running in development mode on port 
Executing (default): INSERT INTO `Users` (`id`,`alumni_name`,`user_name`
,`register_number`,`password`,`dob`,`gender`,`address`,`mobile_number`,`
email_address`,`passout_year`,`company_name`,`qualification`,`designatio
n`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?,?,?,?,?,?,?,?,?,?,?,
?);
Executing (default): INSERT INTO `Users` (`id`,`alumni_email_address`,`passout_year`,`company_name`,`qualification`,`designation`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);                  Executing (default): INSERT INTO `Users` (`id`,`alumni_name`,`user_name`,`register_number`,`password`,`dob`,`gender`,`address`,`mobile_number`,`email_address`,`passout_year`,`company_name`,`qualification`,`designation`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?,?,?,?,?
,?,?,?,?,?,?,?);
Executing (default): INSERT INTO `Users` (`id`,`alumni_
name`,`user_name`,`register_number`,`password`,`dob`,`g
ender`,`address`,`mobile_number`,`email_address`,`passcreatedAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);          Executing (default): INSERT INr_number`,`password`,`dob`,`gender`,`address`,`mobile_number`,`email_address`,`passout_year`,`company_namr_num`qualification`,`designation`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);        

vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api
vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api (master)                               $ git add .
                                                       vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api (master)
$ git add .

vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api (master)
$ git commit -m "initial"
[master (root-commit) c535251] initial
 17 files changed, 2653 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 config/config.json
 create mode 100644 controllers/user.controllers.js    
 create mode 100644 middleware/errorMiddleware.js      
 create mode 100644 migrations/20221006055011-create-job.js
 create mode 100644 migrations/20221006055101-create-event.js
 create mode 100644 migrations/20221006064838-create-user.js
 create mode 100644 models/event.js
 create mode 100644 models/index.js
 create mode 100644 models/job.js
 create mode 100644 models/user.js
 create mode 100644 package-lock.json
 create mode 100644 package.json
 create mode 100644 routes/events.routes.js
 create mode 100644 routes/jobs.routes.js
 create mode 100644 routes/user.routes.js
 create mode 100644 server.js

vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api (master)
$ git remote add origin https://github.com/vikraj01/alumni_management.git

vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api (master)
$ git push -u origin master
Enumerating objects: 24, done.
Counting objects: 100% (24/24), done.
Delta compression using up to 12 threads
Compressing objects: 100% (20/20), done.
 * [new branch]      master -> master
branch 'master' set up to track 'origin/master'.

vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api (master)
$ sequelize model:generate --name User --attributes alumni_name:string,user_name:string,register_number:string,password:string,dob:string,gender:string,address:string,mobile_number:number,email_address:string,passout_year:number,company_name:string,qualification:string,designation:string

Sequelize CLI [Node: 16.15.0, CLI: 6.5.1, ORM: 6.24.0]

New model was created at D:\Web_Developement_Base\MERN\alumni-api\models\user.js .
New migration was created at D:\Web_Developement_Base\MERN\alumni-api\migrations\20221006072226-create-user.js .  

vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api (master)
$ sequelize model:generate --name Admin --attributes name:string,email:string,password:string

Sequelize CLI [Node: 16.15.0, CLI: 6.5.1, ORM: 6.24.0]

New model was created at D:\Web_Developement_Base\MERN\alumni-api\models\admin.js .
New migration was created at D:\Web_Developement_Base\MERN\alumni-api\migrations\20221006072354-create-admin.js . 

vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api (master)
$ sequelize db:migrate

Sequelize CLI [Node: 16.15.0, CLI: 6.5.1, ORM: 6.24.0]
min: migrating =======
== 20221006072354-create-admin: migrated (0.034s)


vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api (master)
$ npm i bcryptjs
  run `npm fund` for details

found 0 vulnerabilities

vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api (master)
$ sequelize seed:generate --name admin-seeder alumni-seeder

Sequelize CLI [Node: 16.15.0, CLI: 6.5.1, ORM: 6.24.0] 

Options:
  --version          Show version number      [boolean]
  --help             Show help                [boolean]
  --env              The environment to run the command
                     in
                      [string] [default: "development"]
  --config           The path to the config file       
                                               [string]
  --options-path     The path to a JSON file with      
                     additional options        [string]
  --migrations-path  The path to the migrations folder 
                       [string] [default: "migrations"]
  --seeders-path     The path to the seeders folder    
                          [string] [default: "seeders"]
  --models-path      The path to the models folder     
                           [string] [default: "models"]
  --url              The database connection string to 
                     use. Alternative to using --config
                     files                     [string]
  --debug            When available show various debug 
                     information
                             [boolean] [default: false]
  --name             Defines the name of the seed      
                                    [string] [required]

Unknown argument: alumni-seeder

vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api (master)
$ sequelize seed:generate --name admin-seeder

Sequelize CLI [Node: 16.15.0, CLI: 6.5.1, ORM: 6.24.0] 

seeders folder at "D:\Web_Developement_Base\MERN\alumni-api\seeders" already exists.
New seed was created at D:\Web_Developement_Base\MERN\alumni-api\seeders\20221006080252-admin-seeder.js .     

vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api (master)
$ sequelize seed:generate --name alumni-seeder
080309-alumni-seeder.js .  

$ sequelize db:seed --seed 20221006080252-admin-seeder$ sequelize db:seed --seed 20221006080252-admin-seeder.js

Sequelize CLI [Node: 16.15.0, CLI: 6.5.1, ORM: 6.24.0]
der: migrating =======
== 20221006080252-admin-seeder: migrated (0.301s)


vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api (master)
$ sequelize seed:generate --name 20221006080309-alumni-seeder.js
Web_Developement_Base\MERN\alumni-api\seeders\20221006081326-20221006080309-alumni-seeder.js.js .
Web_Developement_Base\MERN\alumni-api\seeders\20221006081326-20221006080309-alumni-seeder.js.js .

vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api (master)
$ sequelize db:seed --seed 20221006080309-alumni-seeder.js

Sequelize CLI [Node: 16.15.0, CLI: 6.5.1, ORM: 6.24.0]


ERROR: Unknown column 'name' in 'field list'


vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api (master)
$ sequelize db:seed --seed 20221006080309-alumni-seeder.js

Sequelize CLI [Node: 16.15.0, CLI: 6.5.1, ORM: 6.24.0]

Loaded configuration file "config\config.json".
Using environment "development".
== 20221006080309-alumni-seeder: migrating =======

ERROR: Unknown column 'name' in 'field list'


vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api (master)
$ sequelize db:seed --seed 20221006080309-alumni-seeder.js

Sequelize CLI [Node: 16.15.0, CLI: 6.5.1, ORM: 6.24.0]

Loaded configuration file "config\config.json".
Using environment "development".
== 20221006080309-alumni-seeder: migrating =======
' in 'field list'

$ sequelize db:seed --seed 20221006080309-alumni-seeder.js
vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/$ sequelize db:seed --seed$ sequelize db:seed --seed $ sequelize db:seed --seed $ sequelize model:generate --name Alumni --attributes alumni_name:string,user_name:string,register_number:string,password:string,dob:string,gender:string,address:string,mobile_number:number,email_address:string,passout_year:number,company_name:string,qualification:string,designation:string

Sequelize CLI [Node: 16.15.0, CLI: 6.5.1, ORM: 6.24.0]

New model was created at D:\Web_Developement_Base\MERN\alumni-api\models\alumni.js .
New migration was created at D:\Web_Developement_Base\MERN\alumni-api\migrations\20221006112317-create-alumni.js .

vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api (master)
$ sequelize db:migrate

Sequelize CLI [Node: 16.15.0, CLI: 6.5.1, ORM: 6.24.0]

Loaded configuration file "config\config.json".
Using environment "development".
== 20221006112317-create-alumni: migrating =======
== 20221006112317-create-alumni: migrated (0.048s)


vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api (master)
$ sequelize model:generate --name Alumni --attributes alumni_name:string,user_name:string,register_number:string,password:string,dob:string,gender:string,address:string,mobile_number:number,email_address:string,passout_year:number,company_name:string,qualification:string,designation:string,isApproved:Boolean

Sequelize CLI [Node: 16.15.0, CLI: 6.5.1, ORM: 6.24.0]

New model was created at D:\Web_Developement_Base\MERN\alumni-api\models\alumni.js .
New migration was created at D:\Web_Developement_Base\MERN\alumni-api\migrations\20221006112717-create-alumni.js .

vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api (master)
$ sequelize db:migrate

Sequelize CLI [Node: 16.15.0, CLI: 6.5.1, ORM: 6.24.0]

Loaded configuration file "config\config.json".
Using environment "development".
== 20221006112717-create-alumni: migrating =======
== 20221006112717-create-alumni: migrated (0.028s)


vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api (master)
$ sequelize model:generate --name Alumni --attributes alumni_name:string,user_name:string,register_number:string,password:string,dob:string,gender:string,address:string,mobile_number:number,email_address:string,passout_year:number,company_name:string,qualification:string,designation:ster,company_name:string,qualification:string,designation:string,isApproved:Boolean

Sequelize CLI [Node: 16.15.0, CLI: 6.5.1, ORM: 6.24.0]

New model was created at D:\Web_Developement_Base\MERN\alumni-api\models\alumni.js .
New migration was created at D:\Web_Developement_Base\MERN\alumni-api\migrations\20221006113603-create-alumni.js .
vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api (master)
$ sequelize db:migrate

Sequelize CLI [Node: 16.15.0, CLI: 6.5.1, ORM: 6.24.0]

Loaded configuration file "config\config.json".
Using environment "development".
== 20221006113603-create-alumni: migrating =======

ERROR: You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'NUMBER, `email` VARCHAR(255), `passoutYear` NUMBER, `company` VARCHAR(255), `qua' at line 1


vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api (master)
$ sequelize db:migrate

Sequelize CLI [Node: 16.15.0, CLI: 6.5.1, ORM: 6.24.0]

Loaded configuration file "config\config.json".
Using environment "development".
== 20221006113603-create-alumni: migrating =======
== 20221006113603-create-alumni: migrated (0.023s)


vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api (master)
$ sequelize db:seed --seed 20221006080309-alumni-seeder.js

Sequelize CLI [Node: 16.15.0, CLI: 6.5.1, ORM: 6.24.0]

Loaded configuration file "config\config.json".
Using environment "development".
== 20221006080309-alumni-seeder: migrating =======

ERROR: Unknown column 'name' in 'field list'


vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api (master)
$ db:migrate
bash: db:migrate: command not found

vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api (master)
$ sequelize db:migrate

Sequelize CLI [Node: 16.15.0, CLI: 6.5.1, ORM: 6.24.0]

Loaded configuration file "config\config.json".
Using environment "development".
No migrations were executed, database schema was already up to date.

vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api (master)
$ sequelize db:migrate

Sequelize CLI [Node: 16.15.0, CLI: 6.5.1, ORM: 6.24.0]

Loaded configuration file "config\config.json".
Using environment "development".
No migrations were executed, database schema was already up to date.

vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api (master)
$ sequelize model:generate --name Alumni --attributes alumni_name:string,user_name:string,register_number:string,password:string,dob:string,gender:string,address:string,mobile_number:number,email_address:string,passout_year:number,company_name:string,qualification:string,designation:ster,company_name:string,qualification:string,designation:string,isApproved:Boolean

Sequelize CLI [Node: 16.15.0, CLI: 6.5.1, ORM: 6.24.0]

New model was created at D:\Web_Developement_Base\MERN\alumni-api\models\alumni.js .
New migration was created at D:\Web_Developement_Base\MERN\alumni-api\migrations\20221006114728-create-alumni.js .
vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api (master)
$ sequelize db:migrate

Sequelize CLI [Node: 16.15.0, CLI: 6.5.1, ORM: 6.24.0]

Loaded configuration file "config\config.json".
Using environment "development".
== 20221006114728-create-alumni: migrating =======
== 20221006114728-create-alumni: migrated (0.047s)


vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api (master)
$ sequelize db:seed --seed 20221006080309-alumni-seeder.js

Sequelize CLI [Node: 16.15.0, CLI: 6.5.1, ORM: 6.24.0]

Loaded configuration file "config\config.json".
Using environment "development".
== 20221006080309-alumni-seeder: migrating =======

ERROR: Field 'username' doesn't have a default value


vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api (master)
$ sequelize db:seed --seed 20221006080309-alumni-seeder.js

Sequelize CLI [Node: 16.15.0, CLI: 6.5.1, ORM: 6.24.0]

Loaded configuration file "config\config.json".
Using environment "development".
== 20221006080309-alumni-seeder: migrating =======

ERROR: Unknown column 'passout' in 'field list'


vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api (master)
$ sequelize db:seed --seed 20221006080309-alumni-seeder.js

Sequelize CLI [Node: 16.15.0, CLI: 6.5.1, ORM: 6.24.0]

Loaded configuration file "config\config.json".
Using environment "development".
== 20221006080309-alumni-seeder: migrating =======
== 20221006080309-alumni-seeder: migrated (0.159s)


vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api (master)
$ node 
Welcome to Node.js v16.15.0.
Type ".help" for more information.
> require('bcryptjs')
{
  setRandomFallback: [Function (anonymous)],
  genSaltSync: [Function (anonymous)],
  genSalt: [Function (anonymous)],
  hashSync: [Function (anonymous)],
  hash: [Function (anonymous)],
  compareSync: [Function (anonymous)],
  compare: [Function (anonymous)],
  getRounds: [Function (anonymous)],
  getSalt: [Function (anonymous)],
  encodeBase64: [Function: base64_encode],
  decodeBase64: [Function: base64_decode]
}
> const bcrypt = require('bcryptjs')
undefined
> console.log(JSON.stringfy{())
console.log(JSON.stringfy{())
                 ^^^^^^^^

Uncaught SyntaxError: missing ) after argument list
>         id: 1,
...         name: "name",
        name: "name",
            ^

Uncaught SyntaxError: Unexpected token ':'
>         username: "text",
...         regno: "text1",
        regno: "text1",
             ^

Uncaught SyntaxError: Unexpected token ':'
>         password: bcrypt.hashSync('password'),
...         dob: "2018-03-29",
        dob: "2018-03-29",
           ^

Uncaught SyntaxError: Unexpected token ':'
>         gender: "male",
...         address: "address",
        address: "address",
               ^

Uncaught SyntaxError: Unexpected token ':'
>         mobile: 123,
...         email: "email",
        email: "email",
             ^

Uncaught SyntaxError: Unexpected token ':'
>         passoutYear: 12,
...         company,
...         createdAt: new Date(),
        createdAt: new Date(),
                 ^

Uncaught SyntaxError: Unexpected token ':'
>     }: "company",
    }: "company",
    ^

Uncaught SyntaxError: Unexpected token '}'
>         qualification: "bed",
        designation: "des",
Uncaught SyntaxError: Unexp
ected token '}'
>         qualification: "b
ed",                       ...         designation: "des",                               designation: "des",

                   ^

Uncaught SyntaxError: Unexpected token ':'
>         updatedAt: new Date()
>
(To exit, press Ctrl+C again or Ctrl+D or type .exit)
>

vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api (master)
$ sequelize seed:generate --name event-seeder

Sequelize CLI [Node: 16.15.0, CLI: 6.5.1, ORM: 6.24.0]

seeders folder at "D:\Web_Developement_Base\MERN\alumni-api\seeders" already exists.
New seed was created at D:\Web_Developement_Base\MERN\alumni-api\seeders\20221006132013-event-seeder.js .

vikas@LAPTOP-RKFE274I MINGW64 /d/Web_Developement_Base/MERN/alumni-api (master)
$ sequelize seed:generate --name job-seeder

Sequelize CLI [Node: 16.15.0, CLI: 6.5.1, ORM: 6.24.0]

seeders folder at "D:\Web_Developement_Base\MERN\alumni-api\seeders" already exists.
New seed was created at D:\Web_Developement_Base\MERN\alumni-api\seeders\20221006132022-job-seeder.js .

vika
*/