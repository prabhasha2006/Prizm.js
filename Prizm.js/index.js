var editors = document.getElementsByClassName('textarea-editor')
editors[0].value = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- Your code here -->
</body>
</html>`

editors[1].value =
`* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}`

editors[2].value =
`console.log("Hello World")`

function changeTheme(value){
    customTheme.href = `./system/syntax${value}.css`
}