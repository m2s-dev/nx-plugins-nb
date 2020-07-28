import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { createEmptyWorkspace } from '@nrwl/workspace/testing';
import { join } from 'path';

import { NxPluginWakandaSchematicSchema } from './schema';

describe('nx-plugin-wakanda schematic', () => {
  let appTree: Tree;
  const options: NxPluginWakandaSchematicSchema = { name: 'test' };

  const testRunner = new SchematicTestRunner(
    '@m2s-dev/nx-plugin-wakanda',
    join(__dirname, '../../../collection.json')
  );

  beforeEach(() => {
    appTree = createEmptyWorkspace(Tree.empty());
  });

  it('should run successfully', async () => {
    await expect(
      testRunner
        .runSchematicAsync('nx-plugin-wakanda', options, appTree)
        .toPromise()
    ).resolves.not.toThrowError();
  });
});
