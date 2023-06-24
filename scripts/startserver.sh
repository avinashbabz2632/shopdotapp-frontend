#!/bin/bash

git clone -b pre-dev git@github.com:avinashbabz2632/shopdotapp-frontend.git

cd /home/ubuntu/shopdotapp-frontend

sudo npm install

sudo npm run build

sudo npm start
