document.addEventListener('DOMContentLoaded', function() {
  // Initial markdown content
  var initialMarkdown = `
# Welcome to my Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

| Wild Header | Crazy Header | Another Header? |
| ------------ | ------------- | ------------- |
| Your content can | be here, and it | can be here.... |
| And here. | Okay. | I think we get it. |

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbererd lists too.
2. Use just 1s if you want!
3. But the list goes on...

- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)
`;

  // Initialize editor and preview elements
  var editor = document.getElementById('editor');
  var preview = document.getElementById('preview');

  // Set initial markdown content in editor
  editor.value = initialMarkdown;

  // Function to update preview
  function updatePreview() {
    var markdown = editor.value;
    var html = marked(markdown);
    preview.innerHTML = html;
  }

  // Initial update of preview
  updatePreview();

  // Event listener for input in editor
  editor.addEventListener('input', function() {
    updatePreview();
  });
});
