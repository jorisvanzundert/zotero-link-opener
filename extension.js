const vscode = require( 'vscode' );
const cp = require( 'child_process' )

/**
 * @param {vscode.ExtensionContext} context
 */
function activate( context ) {
	const command = 'extension.openZoteroLink';
	var zoteroLink = '';

	const commandHandler = () => {
		var terminalCommand = `open ${zoteroLink}`;
		if ( process.platform == 'wins32' ) {
			terminalCommand = `start ${zoteroLink}`;
		}
		cp.exec( terminalCommand, ( err, stdout, stderr ) => {
			// console.log('stdout: ' + stdout);
			// console.log('stderr: ' + stderr);
			if ( err ) {
				vscode.window.showErrorMessage( `Could not open Zotero link: ${err}.` );
			}
		} );
	};
  
	context.subscriptions.push(vscode.commands.registerCommand( command, commandHandler));
  
	vscode.languages.registerHoverProvider( 'markdown', {
        provideHover( document, position, token ) {
			const pattern = new RegExp( 'zotero://[&\\w/?=-]+' );
            const range = document.getWordRangeAtPosition( position, pattern );
			if ( range ) {
	            zoteroLink = document.getText( range );
				const commentCommandUri = vscode.Uri.parse(`command:extension.openZoteroLink`);
				const contents = new vscode.MarkdownString(`[Open link](${commentCommandUri}) ${zoteroLink}`);
				contents.isTrusted = true;
				return new vscode.Hover(
					contents
				);
			}
        }
    } );
}

// this method is called when your extension is deactivated
function deactivate() {}

// eslint-disable-next-line no-undef
module.exports = {
	activate,
	deactivate
}
