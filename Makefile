KARMA = ./node_modules/karma/bin/karma
ESLINT = ./node_modules/eslint/bin/eslint.js
RUNNER = ./node_modules/mocha/bin/_mocha
FILES = $(shell find app tests -name "*.js*")
TESTS = $(shell find tests -name "*Test.js")

install:
	npm install

dev:
	node server.js

lint:
	node $(ESLINT) $(FILES)

test:
	$(RUNNER) --ui bdd --reporter dot $(TESTS)

karma:
	$(KARMA) start
