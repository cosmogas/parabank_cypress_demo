FROM cypress/included:13.7.3

WORKDIR /e2e

COPY . .

RUN npm install

CMD ["npx", "cypress", "run"]
