#!/bin/bash

git clone -b pre-dev git@github.com:avinashbabz2632/shopdotapp-frontend.git

cd /home/ubuntu/shopdotapp-frontend

npm install

npm run build

npm start
