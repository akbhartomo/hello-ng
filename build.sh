#!/bin/sh

ng build --target=production --environment=prod

docker build -t scr1p7ed/ng2-app .
