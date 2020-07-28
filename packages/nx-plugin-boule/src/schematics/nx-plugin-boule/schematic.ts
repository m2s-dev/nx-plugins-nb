import { Rule, SchematicContext, Tree, url, apply, template, mergeWith} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { ISchema } from './schema';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export default function (options: ISchema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const sourceTemplates = url('./files');
    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({
        ...options,
        ...strings,
        addExclamation
      })
    ]);
    return mergeWith(sourceParametrizedTemplates)(tree, _context);
  };
}

const addExclamation = (value: string): string => {
  return value + '!';
}
