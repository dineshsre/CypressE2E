FROM cypress/included:10.2.0
RUN mkdir /cypress-docker
WORKDIR /cypress-docker
COPY ./package.json .
COPY ./package-lock.json .
COPY ./cypress ./cypress
RUN npm install
ENTRYPOINT ["npm", "run"]