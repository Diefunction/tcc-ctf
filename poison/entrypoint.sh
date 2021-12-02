#!/bin/sh
echo '*/5 * * * * /restart.sh' >> /var/spool/cron/crontabs/root
crond -f &
sleep 2
su node -c "forever start /usr/src/app/app.js"