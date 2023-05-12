## RUN BACKEND APP - Laravel App

Enter the folder with the application

`$ cd /path/to/app/`

Copy .env.example file to .env

`$ cp .env.example .env`

Install composer packages

`$ composer install`

Generate Application key

`$ php artisan key:generate`

In .env file add DB credentials according to your db setup -> MySQL 

`DB_HOST=<HOST_NAME> DB_PORT=<PORT> DB_DATABASE=<DB_NAME> DB_USERNAME=<DB_USERNAME> DB_PASSWORD=<DB_PASSWORD>`

Run migrations and seeders

`$ php artisan migrate --seed`

Run App

`$ php artisan serve`

Your Backend application is ready! - now run your frontend app








## RUN FRONTEND APP - React.js App

NB: Make sure the backend app is running on port 8000 (ie http://127.0.0.1:8000 ). if you already have port 8000 runing a different app, change the port in the frontend app "src/config/baseURL.js" to your new backend port

Enter the folder with the application

`$ cd /path/to/app/`

Install node packages

`$ npm install`

Run App

`npm start`

Your Frontend application is ready!
