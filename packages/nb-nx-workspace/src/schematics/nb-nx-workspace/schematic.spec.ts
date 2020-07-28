import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { createEmptyWorkspace } from '@nrwl/workspace/testing';
import { join } from 'path';

import { NbNxWorkspaceSchematicSchema } from './schema';

describe('nb-nx-workspace schematic', () => {
  let appTree: Tree;
  const options: NbNxWorkspaceSchematicSchema = { name: 'test' };

  const testRunner = new SchematicTestRunner(
    '@m2s-dev/nb-nx-workspace',
    join(__dirname, '../../../collection.json')
  );

  beforeEach(() => {
    appTree = createEmptyWorkspace(Tree.empty());
  });

  it('should run successfully', async () => {
    await expect(
      testRunner
        .runSchematicAsync('nb-nx-workspace', options, appTree)
        .toPromise()
    ).resolves.not.toThrowError();
  });
});
