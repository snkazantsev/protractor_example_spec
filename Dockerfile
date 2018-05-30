FROM atlassianlabs/docker-node-jdk-chrome-firefox:2018-05-28

WORKDIR /root
ADD . /root

COPY package.json package-lock.json ./
RUN npm install

COPY protractor.conf.js ./protractor.conf.js
COPY pages/ ./pages/
COPY specs/ ./specs/
