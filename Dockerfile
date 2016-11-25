FROM iojs:2.3.3

MAINTAINER Jim Anders <janders223@gmail.com>

ENV REFRESHED_AT 2015-07-02

RUN npm install -g ember-cli@0.2.7
RUN npm install -g bower@1.4.1
RUN npm install -g phantomjs@1.9.16

ENV NODE_PATH /opt/node_modules
ENV EMBER_NODE_PATH $NODE_PATH

COPY package.json /opt/package.json
RUN cd /opt && npm install

COPY . /webApps/app

WORKDIR /webApps/app

EXPOSE 4200

ENTRYPOINT ["/webApps/app/bin/entrypoint"]

CMD ["serve"]
