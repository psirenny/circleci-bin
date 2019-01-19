// @flow

import installBinary from '../modules/install-binary';
import version from '../../../circleci-version';

installBinary({ dir: process.cwd(), version });
