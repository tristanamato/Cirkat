<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/form.css">
    <title>Document</title>
</head>
<body>
    <ul>
    <?php foreach($errors as $error) : ?>
        <li id="errors"><?= $error ?></li>
    <?php endforeach; ?>
    </ul>
</body>
</html>