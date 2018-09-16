#!/usr/bin/env node

// @flow

import updateVersion from '../modules/update-version';

updateVersion({ dir: process.cwd() });
