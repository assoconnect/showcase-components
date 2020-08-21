#!/bin/bash

# Prints all command to stdout (for debug purpose)
set -xe

cd /home/assoconnect

# Installation of dependencies
yarn

# Starting the web server
# | cat to prevent yarn from clearing the console
yarn develop | cat
