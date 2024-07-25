# VSCode/VSCodium Zotero link extension for Markdown documents

[Zotero](https://www.zotero.org/) is bibliography and reference manager for research. Many people use [Markdown](https://daringfireball.net/projects/markdown/) documents to log their research, or to prepare drafts for their publications. In research notes that are still under development it can be useful to have links in your Markdown texts that link directly into your Zotero library. Unfortunately, VSCode does not support the application-type/protocol `zotero:`, which is why links like those below will not work.

```
[Bode. 2023. *What’s the Matter with Computational Literary Studies?*](zotero://select/items/_NHLLXCZR)

[Andrews, 2023, p. 1](zotero://select/library/items/PHH2T7NH)) ([pdf](zotero://open-pdf/library/items/HU2CX6DJ?page=1&annotation=SQXWFITU))
```

This extension solves that. Hovering over a Zotero item URI, just click “Follow link”.


## Installing
This extension is not published through the VSCode Marketplace, because I do not feel like the added administration. So instead:

1. Download the ``.vsix'' file, and:
2. In VSCode/VSCodium Go to the Extensions view.
3. Click Views and More Actions (the button marked with the ellipsis ('…') top right on the tree explorer in VSCode/VSCodidum.
4. Select Install from VSIX…


## Creating markdown links to Zotero items

The zotero-markdown-translator is your best friend. Download and install it from GitHub: https://github.com/silentdot/zotero-markdown-translator/. Once installed you can drag and drop Zotero items (and even links to highlights and annotations in PDFs) from Zotero to a Markdown document in VSCode/VSCodium. 

Happy bibliographing!
 
 --

