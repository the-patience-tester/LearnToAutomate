import * as ts from 'typescript';
import * as Lint from 'tslint';
import * as tsutils from 'tsutils';

export class Rule extends Lint.Rules.AbstractRule {
    public static readonly FAILURE_STRING = 'Imports cannot be relative (../) use module aliases instead.';

    public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        return this.applyWithWalker(new RelativeImportWalker(sourceFile, this.getOptions()));
    }

}

class RelativeImportWalker extends Lint.RuleWalker {

    public visitImportDeclaration(node: ts.ImportDeclaration) {
        if (tsutils.isStringLiteral(node.moduleSpecifier)) {
            if (node.moduleSpecifier.text.startsWith('../')) {
                this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING));
            }
        }

        super.visitImportDeclaration(node);
    }

}