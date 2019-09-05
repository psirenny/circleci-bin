// @flow strict

/* eslint-disable no-console */

import { spawn } from 'child_process';
import ensureBinaryExists from '../lib/ensure-binary-exists';
import getBinaryPath from '../lib/get-binary-path';
import version from './version';

const execBinary = async (binPath) => {
  const childProcess = spawn(binPath, process.argv.slice(2), {
    stdio: 'inherit',
  });

  childProcess.on('error', err => {
    console.error(err.stack);
  });

  childProcess.on('exit', code => {
    process.exit(code);
  });

  process.on('SIGTERM', () => {
    childProcess.kill('SIGTERM');
  });

  process.on('SIGINT', () => {
    childProcess.kill('SIGINT');
  });
};

const run = async () => {
  const dir = __dirname;
  const binPath = getBinaryPath({ dir, version });
  await ensureBinaryExists({ dir, version });
  await execBinary(binPath);
};

run();
