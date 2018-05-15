#!/usr/bin/env bash

set -e;

wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
apt-get update

set +e;

dpkg -i google-chrome-stable_current_amd64.deb;

CHROME_INSTALLATION_STATUS=$?;

if [ ! ${CHROME_INSTALLATION_STATUS} -eq 0 ]; then
    printf "\nChrome installation failed. Trying to install forcely all dependencies\n";
    apt-get -f -y install;
    dpkg -i google-chrome-stable_current_amd64.deb;
    CHROME_INSTALLATION_STATUS=$?;
fi

set -e;

if [ ! ${CHROME_INSTALLATION_STATUS} -eq 0 ]; then
    printf "\nChrome installation failed. Exiting\n";
    exit 1;
fi
