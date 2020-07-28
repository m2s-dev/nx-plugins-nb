import {
  checkFilesExist,
  ensureNxProject,
  readJson,
  runNxCommandAsync,
  uniq,
} from '@nrwl/nx-plugin/testing';
describe('nb-nx-workspace e2e', () => {
  it('should create nb-nx-workspace', async (done) => {
    const plugin = uniq('nb-nx-workspace');
    ensureNxProject(
      '@m2s-dev/nb-nx-workspace',
      'dist/packages/nb-nx-workspace'
    );
    await runNxCommandAsync(
      `generate @m2s-dev/nb-nx-workspace:nbNxWorkspace ${plugin}`
    );

    const result = await runNxCommandAsync(`build ${plugin}`);
    expect(result.stdout).toContain('Builder ran');

    done();
  });

  describe('--directory', () => {
    it('should create src in the specified directory', async (done) => {
      const plugin = uniq('nb-nx-workspace');
      ensureNxProject(
        '@m2s-dev/nb-nx-workspace',
        'dist/packages/nb-nx-workspace'
      );
      await runNxCommandAsync(
        `generate @m2s-dev/nb-nx-workspace:nbNxWorkspace ${plugin} --directory subdir`
      );
      expect(() =>
        checkFilesExist(`libs/subdir/${plugin}/src/index.ts`)
      ).not.toThrow();
      done();
    });
  });

  describe('--tags', () => {
    it('should add tags to nx.json', async (done) => {
      const plugin = uniq('nb-nx-workspace');
      ensureNxProject(
        '@m2s-dev/nb-nx-workspace',
        'dist/packages/nb-nx-workspace'
      );
      await runNxCommandAsync(
        `generate @m2s-dev/nb-nx-workspace:nbNxWorkspace ${plugin} --tags e2etag,e2ePackage`
      );
      const nxJson = readJson('nx.json');
      expect(nxJson.projects[plugin].tags).toEqual(['e2etag', 'e2ePackage']);
      done();
    });
  });
});
