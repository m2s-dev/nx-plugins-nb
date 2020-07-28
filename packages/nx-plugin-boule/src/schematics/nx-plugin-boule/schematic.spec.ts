import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { createEmptyWorkspace } from '@nrwl/workspace/testing';
import { join } from 'path';

import { NxPluginBouleSchematicSchema } from './schema';

describe('nx-plugin-boule schematic', () => {
  let appTree: Tree;
  const options: NxPluginBouleSchematicSchema = { name: 'test' };

  const testRunner = new SchematicTestRunner(
    '@m2s-dev/nx-plugin-boule',
    join(__dirname, '../../../collection.json')
  );

  beforeEach(() => {
    appTree = createEmptyWorkspace(Tree.empty());
  });

  it('should run successfully', async () => {
    await expect(
      testRunner
        .runSchematicAsync('nx-plugin-boule', options, appTree)
        .toPromise()
    ).resolves.not.toThrowError();
  });
});
