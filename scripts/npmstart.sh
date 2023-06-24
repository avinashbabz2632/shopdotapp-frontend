#!/bin/bash


cd /home/ubuntu/shopdot-frontend


npx pm2 start npm --name "my-app" -- start
