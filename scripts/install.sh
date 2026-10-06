#!/bin/bash

cd /home/ubuntu/app

npm install

pkill -f "node app.js" || true

nohup npm start > /home/ubuntu/app/app.log 2>&1 &