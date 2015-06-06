KARMA = ./node_modules/karma/bin/karma
ESLINT = ./node_modules/eslint/bin/eslint.js
FILES = $(shell find app tests -name "*.js*")

install:
	npm install

dev:
	node server.js

lint:
	node $(ESLINT) $(FILES)

