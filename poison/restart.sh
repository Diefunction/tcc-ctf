#!/bin/sh
su node -c "forever stopall"
sleep 2
su node -c "forever start /usr/src/app/app.js"