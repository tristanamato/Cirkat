<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/form.css">
    <title>Document</title>
</head>
<body>
<header>
   <form action ="result.php" method="post">
   <div id="firstname>
      <label  for="firstname">Name :</label>
      <input  type="text"  id="firstname"  name="firstname">
    </div>
    <div id="lastname">
      <label  for="lastname">Last Name :</label>
      <input  type="text"  id="lastname"  name="lastname">
    </div>
    <div id="address">
      <label  for="address">Postale address :</label>
      <input  type="text"  id="address"  name="address">
    </div>
    <div id="email">
      <label  for="email">Courriel :</label>
        <input  type="email"  id="email"  name="email">
    </div>

    <div id="shows">
    <label  for="shows">Shows :</label>
      <select  id="shows"  name="shows">
        <?php $shows= ['Diamond Swingers', 'Stars Balance', 'Flying Fantasy'];
            foreach ($shows as $show) : ?>
                <option value="<?php echo strtolower ($show);?>">
                    <?php echo ($show);?>
            </option>
            <?php endforeach ?>
      </select>
            </div>
     <!-- <label  for="payments">Means of payments :</label>
      <select  id="payments"  name="payments">
        <?php 
        // $payments= ['CB', 'Gift tickets', 'Paypal', 'Payment on site']; -->
            // foreach ($payments as $payment) : ?>
                <option value="<?php // echo strtolower ($payment);?>">
                    <?php //echo ($payment);?> -->
            <!-- </option> -->
            <?php // endforeach ?>
      <!-- </select> -->

    <div id="number">
      <br /><label  for="number">Carte number :</label>
        <input  type="text"  id="number"  name="number">
    </div>
    
    <div id="security">
      <br /><label  for="securityCode">Security code :</label>
        <input  type="text"  id="securityCode"  name="securityCode">
    </div>

    <div id="date">
      <label  for="dateCard"> Expiration date :</label>
        <input  type="date"  id="dateCard"  name="dateCard">
    </div>
      
    <div id="message">
      <label  for="message">Message :</label>
      <textarea  id="message"  name="message"></textarea>
    </div>
    <div  class="button">
      <button  type="submit">Send message</button>  

</body>
</html>